<template>
    <div class="container mt-4 box-container">
        <div class="row mb-3">
            <div class="col-12">
                <h1>Munkatársak</h1>
            </div>
        </div>

        <div class="row mb-3">
            <div class="col-12">
                <h2>
                    Szűrési lehetőségek
                </h2>

                <div class="row">
                    <div class="col-12 col-lg-4">
                        <label for="name">Név</label>
                        <input type="text" v-model="filter.name" id="name" class="form-control">
                    </div>

                    <div class="col-12 col-lg-4">
                        <label for="email">E-mail</label>
                        <input type="text" v-model="filter.email" id="email" class="form-control">
                    </div>

                    <div class="col-12 d-flex justify-content-end mt-3">
                        <button class="btn btn-primary mr-3" @click="getUsers">Szűrés</button>
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
                            <th>Név</th>
                            <th>E-mail cím</th>
                            <th>Telefonszám</th>
                            <th>Admin</th>
                            <th>Státusz</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(user, index) in users">
                            <td>{{ user.name }}</td>
                            <td>{{ user.email }}</td>
                            <td>{{ user.phone }}</td>
                            <td>{{ user.profileTranslated }}</td>
                            <td>{{ user.statusTranslated }}</td>
                            <td>
                                <router-link :to="{name: 'users_edit', params: {id: user.id}}" class="btn btn-info">Részletek</router-link>
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
        name: 'users_index',
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
                    name: '',
                    email: '',
                    pagination: 1
                },
                perPage: 10,
                total: 0,
                lastPage: 0,
                firstPage: 1,
                users: [],
                errors: {},
                currentPage: 1,
            }
        },
        methods: {
            previousPage() {
                this.currentPage -= 1;
                this.getUsers();
            },
            nextPage() {
                this.currentPage += 1;
                this.getUsers();
            },
            removeFilters() {
                this.filter.name = '';
                this.filter.email = '';
                this.getUsers();
            },
            getUsers() {
                const that = this;
                this.errors = {};

                let params = {};

                params = this.filter;

                params['page'] = this.currentPage;

                axios.get('/api/users', {
                    headers: {
                        Authorization: 'Bearer ' + that.token
                    },
                    params: params
                })
                    .then(response => {
                        if (response.data.status === 'success') {
                            that.users = response.data.data.data;

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
            isAdmin() {
                return this.$store.getters.getProfile === 'admin';
            },
        },
        mounted() {
            if(this.isAdmin()) {
                this.getUsers();
            }
        }
    }
</script>