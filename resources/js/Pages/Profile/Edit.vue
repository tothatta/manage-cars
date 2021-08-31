<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-12 col-lg-6 offset-0 offset-lg-3 auth-container">
                <h1 class="mb-4">Adataim módosítása</h1>

                <div class="alert alert-success" role="alert" v-if="responseStatus == 'success'">
                    Sikeresen módosította adatait!
                </div>

                <form action="" v-on:submit.prevent="submitForm()">
                    <div class="mb-3">
                        <label for="name">Név:</label>
                        <input type="text" class="form-control" id="name" v-model="user.name">
                        <div class="form-text text-danger">
                            {{ hasError('name') }}
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="email">E-mail cím:</label>
                        <input type="email" class="form-control" id="email" v-model="user.email">
                        <div class="form-text text-danger">
                            {{ hasError('email') }}
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="phone">Telefonszám:</label>
                        <input type="text" class="form-control" id="phone" v-model="user.phone">
                        <div class="form-text text-danger">
                            {{ hasError('phone') }}
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="password">Új Jelszó</label>
                        <input type="password" class="form-control" id="password" v-model="user.password">
                        <div class="form-text text-danger">
                            {{ hasError('password') }}
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="password_confirmation">Új Jelszó megerősítés</label>
                        <input type="password" class="form-control" id="password_confirmation" v-model="user.password_confirmation">
                        <div class="form-text text-danger">
                            {{ hasError('password_confirmation') }}
                        </div>
                    </div>

                    <div class="text-end mt-4">
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
        name: 'register',
        computed: {
            ...mapState({
                loggedIn: state => state.loggedIn,
                profile: state => state.profile,
                token: state => state.token
            })
        },
        data() {
            return {
                user: {
                    name: '',
                    email: '',
                    phone: '',
                    password: '',
                    password_confirmation: ''
                },
                errors: {},
                responseStatus: '',
            }
        },
        methods: {
            submitForm() {
                const that = this;
                this.errors = {};
                this.responseStatus ='';

                axios.post("/api/profile", that.user, {
                    headers: {
                        Authorization: 'Bearer ' + that.token
                    }
                })
                    .then(response => {
                        if (response.data.status === 'success') {
                            that.responseStatus = response.data.status;
                        } else {
                            for (const error in response.data.messages) {
                                that.$set(that.errors, error, response.response.data.messages[error]);
                            }
                        }
                    }).catch(errorResponse => {
                    for (const error in errorResponse.response.data.messages) {
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
            getData() {
                const that = this;
                this.errors = {};

                axios.get('/api/profile', {
                    headers: {
                        Authorization: 'Bearer ' + that.token
                    }
                })
                    .then(response => {
                        if (response.data.status === 'success') {
                            that.user = response.data.data;
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
            }
        },
        mounted() {
            this.getData();
        }
    }
</script>