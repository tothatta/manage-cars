<template>
    <div class="container mt-4 box-container">
        <div class="row mb-3">
            <div class="col-12 d-flex justify-content-between align-items-center flex-wrap">
                <h1>Gépjárművek</h1>

                <router-link :to="{name: 'cars_create'}" class="btn btn-success">Új Gépjármű létrehozása</router-link>
            </div>
        </div>

        <div class="row mb-3">
            <div class="col-12">
                <h2>
                    Szűrési lehetőségek
                </h2>

                <div class="row">
                    <div class="col-12 col-lg-4">
                        <label for="type">Típus</label>
                        <select v-model="filter.type" id="type" class="form-control">
                            <option value="">Mind</option>
                            <option v-for="(option, index) in typeOptions" :value="option.id">{{ option.name }}</option>
                        </select>
                    </div>

                    <div class="col-12 col-lg-4">
                        <label for="license">Rendszám</label>
                        <input type="text" v-model="filter.license" id="license" class="form-control">
                    </div>

                    <div class="col-12 col-lg-4" v-if="isAdmin()">
                        <label for="user">Munkatárs</label>
                        <select v-model="filter.user" id="user" class="form-control">
                            <option value="">Mind</option>
                            <option v-for="(userOption, index) in userOptions" :value="userOption.id">{{ userOption.name }}</option>
                        </select>
                    </div>

                    <div class="col-12 d-flex justify-content-center justify-content-lg-end mt-3">
                        <button class="btn btn-primary mr-3" @click="getCars">Szűrés</button>
                        <button class="btn btn-default" @click="removeFilters">Szűrők törlése</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-12">
                <div class="table-responsive">
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Munkatárs</th>
                                <th>Autó Típus</th>
                                <th>Rendszám</th>
                                <th>Km óra állás</th>
                                <th>Évjárat</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(car, index) in cars">
                                <td>{{ car.userName }}</td>
                                <td>{{ car.carTypeName }}</td>
                                <td>{{ car.license }}</td>
                                <td>{{ car.km }}</td>
                                <td>{{ car.vintage }}</td>
                                <td>
                                    <router-link :to="{name: 'cars_edit', params: {id:car.id}}" class="btn btn-info">Részletek</router-link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="col-12">
                <div class="text-center" v-if="lastPage > 1">
                    <button type="button" class="btn btn-primary" :disabled="currentPage === firstPage" @click="previousPage()">Previous page</button>
                    <button type="button" class="btn btn-primary" :disabled="currentPage === lastPage" @click="nextPage()">Next page</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import { mapState } from 'vuex';

    export default {
        name: 'cars_index',
        computed: {
            ...mapState({
                loggedIn: state => state.loggedIn,
                profile: state => state.profile,
                token: state => state.token
            })
        },
        data() {
            return {
                filter: {
                    type: '',
                    license: '',
                    user: ''
                },
                perPage: 10,
                total: 0,
                lastPage: 0,
                firstPage: 1,
                cars: [],
                errors: {},
                typeOptions: [],
                userOptions: [],
                currentPage: 1,
            }
        },
        methods: {
            previousPage() {
                this.currentPage -= 1;
                this.getCars();
            },
            nextPage() {
                this.currentPage += 1;
                this.getCars();
            },
            getCars() {
                const that = this;
                this.errors = {};

                let params = {};

                params = this.filter;

                params['page'] = this.currentPage;

                axios.get('/api/cars', {
                    headers: {
                        Authorization: 'Bearer ' + that.token
                    },
                    params: params
                })
                    .then(response => {
                        if (response.data.status === 'success') {
                            that.cars = response.data.data.data;

                            that.currentPage = response.data.data.current_page;
                            that.total = response.data.data.total;
                            that.lastPage = response.data.data.last_page;
                        } else {
                            for (const error in response.data.messages) {
                                that.$set(that.errors, error, response.data.messages[error]);
                            }
                        }
                    })
                    .catch(errorResponse => {
                        for (const error in errorResponse.response.data.messages) {
                            that.$set(that.errors, error, errorResponse.response.data.messages[error]);
                        }
                    });
            },
            removeFilters() {
                this.filter.type = '';
                this.filter.license = '';
                this.filter.user = '';
                this.getCars();
            },
            getCarTypes() {
                const that = this;
                this.errors = {};

                axios.get('/api/car-types', {
                    headers: {
                        Authorization: 'Bearer ' + that.token
                    }
                })
                    .then(response => {
                        if (response.data.status === 'success') {
                            for (let index in response.data.data) {
                                that.typeOptions.push({
                                    id: response.data.data[index].id,
                                    name: response.data.data[index].name
                                });
                            }
                        } else {
                            for (const error in response.data.messages) {
                                that.$set(that.errors, error, response.data.messages[error]);
                            }
                        }
                    })
                    .catch(errorResponse => {
                        for (const error in errorResponse.response.data.messages) {
                            that.$set(that.errors, error, errorResponse.response.data.messages[error]);
                        }
                    });
            },
            getUsers() {
                const that = this;
                this.errors = {};

                axios.get('/api/users?pagination=0', {
                    headers: {
                        Authorization: 'Bearer ' + that.token
                    }
                })
                    .then(response => {
                        if (response.data.status === 'success') {
                            for (let index in response.data.data) {
                                that.userOptions.push({
                                    id: response.data.data[index].id,
                                    name: response.data.data[index].name
                                });
                            }
                        } else {
                            for (const error in response.data.messages) {
                                that.$set(that.errors, error, response.data.messages[error]);
                            }
                        }
                    })
                    .catch(errorResponse => {
                        for (const error in errorResponse.response.data.messages) {
                            that.$set(that.errors, error, errorResponse.response.data.messages[error]);
                        }
                    });
            },
            isAdmin() {
                return this.$store.getters.getProfile === 'admin';
            },
        },
        mounted() {
            this.getCarTypes();
            if(this.isAdmin()) {
                this.getUsers();
            }
            this.getCars();
        }
    }
</script>