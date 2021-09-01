<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-12 col-lg-8 offset-0 offset-lg-2 box-container">
                <h1 class="mb-4">Munkatárs adatai</h1>

                <div class="mb-3 text-end">
                    <button class="btn btn-danger" @click="deleteUser">Munkatárs törlése</button>
                </div>

                <form action="" v-on:submit.prevent="submitForm()">
                    <div class="mb-3">
                        <label for="name">Munkatárs neve:</label>
                        <input type="text" class="form-control" id="name" v-model="form.name">
                        <div class="form-text text-danger">
                            {{ hasError('name') }}
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="email">Munkatárs E-mail címe:</label>
                        <input type="email" class="form-control" id="email" v-model="form.email">
                        <div class="form-text text-danger">
                            {{ hasError('email') }}
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="phone">Munkatárs telefonszáma:</label>
                        <input type="text" class="form-control" id="phone" v-model="form.phone">
                        <div class="form-text text-danger">
                            {{ hasError('phone') }}
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

                    <div class="mb-3">
                        <label for="profile">Jogosultság:</label>
                        <select v-model="form.profile" id="profile" class="form-control">
                            <option value="user">Munkatárs</option>
                            <option value="admin">Admin</option>
                        </select>
                        <div class="form-text text-danger">
                            {{ hasError('profile') }}
                        </div>
                    </div>

                    <div class="text-end mt-4">
                        <router-link class="btn" :to="{name: 'users_index'}">Mégsem</router-link>
                        <button type="submit" class="btn btn-primary">Mentés</button>
                    </div>
                </form>

                <hr>

                <h2>Munkatárs gépjárművei</h2>

                <div class="table-responsive">
                    <table class="table table-striped table-hover">
                        <thead>
                        <tr>
                            <th>Autó Típus</th>
                            <th>Rendszám</th>
                            <th>Km óra állás</th>
                            <th>Évjárat</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(car, index) in cars">
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
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import { mapState } from 'vuex';

    export default {
        name: 'users_edit',
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
                    name: '',
                    email: '',
                    phone: '',
                    status: '',
                    profile: '',
                },
                errors: {},
                userId: this.$route.params.id,
                cars: []
            }
        },
        methods: {
            deleteUser() {
                const that = this;
                this.errors = {};

                axios.delete("/api/users/" + that.userId, {
                    headers: {
                        Authorization: 'Bearer ' + that.token
                    }
                })
                    .then(response => {
                        if (response.data.status === 'success') {
                            that.$router.push({ name: 'users_index'});
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
            getUser() {
                const that = this;
                this.errors = {};

                axios.get("/api/users/" + that.userId, {
                    headers: {
                        Authorization: 'Bearer ' + that.token
                    }
                })
                    .then(response => {
                        if (response.data.status === 'success') {
                            that.form.name = response.data.data.name;
                            that.form.email = response.data.data.email;
                            that.form.phone = response.data.data.phone;
                            that.form.status = response.data.data.status;
                            that.form.profile = response.data.data.profile;

                            that.cars = response.data.data.cars;
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

                axios.put("/api/users/" + that.userId, that.form, {
                    headers: {
                        Authorization: 'Bearer ' + that.token
                    }
                })
                    .then(response => {
                        if (response.data.status === 'success') {
                            that.$router.push({ name: 'users_index'});
                        } else {
                            console.log(response.data);
                            for(const error in response.data.messages){
                                that.$set(that.errors, error, response.data.messages[error]);
                            }
                        }
                    }).catch(errorResponse => {
                    console.log(errorResponse.response, errorResponse);
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
            isAdmin() {
                return this.$store.getters.getProfile === 'admin';
            },
        },
        mounted() {
            if(this.isAdmin()) {
                this.getUser();
            }
        }
    }
</script>