<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-12 col-lg-6 offset-0 offset-lg-3 box-container">
                <h1 class="mb-4">Gépjármű szerkesztése</h1>

                <div class="mb-3 text-end">
                    <button class="btn btn-danger" @click="deleteCar">Gépjármű törlése</button>
                </div>

                <form action="" v-on:submit.prevent="submitForm()">
                    <div class="mb-3">
                        <label for="type">Gépjármű típusa</label>
                        <select v-model="form.car_type_id" id="type" class="form-control">
                            <option v-for="(option, index) in typeOptions" :value="option.id">{{ option.name }}</option>
                        </select>
                        <div class="form-text text-danger">
                            {{ hasError('car_type_id') }}
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="license">Gépjármű rendszáma:</label>
                        <input type="text" class="form-control" id="license" v-model="form.license">
                        <div class="form-text text-danger">
                            {{ hasError('license') }}
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="km">Gépjármű Km óra állása:</label>
                        <input type="number" min="0" class="form-control" id="km" v-model="form.km">
                        <div class="form-text text-danger">
                            {{ hasError('km') }}
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="vintage">Gépjármű évjárata:</label>
                        <input type="number" min="1900" max="2030" class="form-control" id="vintage" v-model="form.vintage">
                        <div class="form-text text-danger">
                            {{ hasError('vintage') }}
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="status">Státusz:</label>
                        <select v-model="form.status" id="status" class="form-control">
                            <option value="active">Aktív</option>
                            <option value="inactive">Inaktív</option>
                        </select>
                        <div class="form-text text-danger">
                            {{ hasError('status') }}
                        </div>
                    </div>

                    <div class="mb-3" v-if="isAdmin()">
                        <label for="user_id">Munkatárs</label>
                        <select v-model="form.user_id" id="user" class="form-control">
                            <option v-for="(userOption, index) in userOptions" :value="userOption.id">{{ userOption.name }}</option>
                        </select>
                        <div class="form-text text-danger">
                            {{ hasError('car_type_id') }}
                        </div>
                    </div>

                    <div class="text-end mt-4">
                        <router-link class="btn" :to="{name: 'cars_index'}">Mégsem</router-link>
                        <button type="submit" class="btn btn-primary">Mentés</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import { mapState } from 'vuex';

    export default {
        name: 'cars_edit',
        computed: {
            ...mapState({
                loggedIn: state => state.loggedIn,
                profile: state => state.profile,
                token: state => state.token
            })
        },
        data() {
            return {
                form: {
                    car_type_id: '',
                    license: '',
                    km: '',
                    vintage: '',
                    status: '',
                    user_id: ''
                },
                errors: {},
                typeOptions:[],
                userOptions:[],
                carId: this.$route.params.id
            }
        },
        methods: {
            deleteCar() {
                const that = this;
                this.errors = {};

                axios.delete("/api/cars/" + that.carId, {
                    headers: {
                        Authorization: 'Bearer ' + that.token
                    }
                })
                    .then(response => {
                        if (response.data.status === 'success') {
                            that.$router.push({ name: 'cars_index'});
                        } else {
                            for(const error in response.data.messages){
                                that.$set(that.errors, error, response.data.messages[error]);
                            }
                        }
                    }).catch(errorResponse => {
                    for(const error in errorResponse.response.data.messages){
                        that.$set(that.errors, error, errorResponse.response.data.messages[error]);
                    }
                })
            },
            getCar() {
                const that = this;
                this.errors = {};

                axios.get("/api/cars/" + that.carId, {
                    headers: {
                        Authorization: 'Bearer ' + that.token
                    }
                })
                    .then(response => {
                        if (response.data.status === 'success') {
                            that.form.car_type_id = response.data.data.car_type_id;
                            that.form.license = response.data.data.license;
                            that.form.km = response.data.data.km;
                            that.form.vintage = response.data.data.vintage;
                            that.form.status = response.data.data.status;

                            if(this.isAdmin()) {
                                that.form.user_id = response.data.data.user_id;
                            }
                        } else {
                            for(const error in response.data.messages){
                                that.$set(that.errors, error, response.data.messages[error]);
                            }
                        }
                    }).catch(errorResponse => {
                    for(const error in errorResponse.response.data.messages){
                        that.$set(that.errors, error, errorResponse.response.data.messages[error]);
                    }
                })
            },
            submitForm() {
                const that = this;
                this.errors = {};

                axios.put("/api/cars/" + that.carId, that.form, {
                    headers: {
                        Authorization: 'Bearer ' + that.token
                    }
                })
                    .then(response => {
                        if (response.data.status === 'success') {
                            that.$router.push({ name: 'cars_index'});
                        } else {
                            for(const error in response.data.messages){
                                that.$set(that.errors, error, response.data.messages[error]);
                            }
                        }
                    }).catch(errorResponse => {
                    for(const error in errorResponse.response.data.messages){
                        that.$set(that.errors, error, errorResponse.response.data.messages[error]);
                    }
                })
            },
            hasError(modelKey) {
                for (const key in this.errors) {
                    if (modelKey === key) {
                        return this.errors[key][0];
                    }
                }
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
                                that.$set(that.errors, error, response.response.data.messages[error]);
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

                axios.get('/api/users', {
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
            this.getCar();
        }
    }
</script>