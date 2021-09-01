<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-12 col-lg-6 offset-0 offset-lg-3 box-container">
                <h1 class="mb-4">Regisztráció</h1>

                <form action="" v-on:submit.prevent="submitForm()">
                    <div class="mb-3">
                        <label for="name">Neve:</label>
                        <input type="text" class="form-control" id="name" v-model="form.name">
                        <div class="form-text text-danger">
                            {{ hasError('name') }}
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="email">E-mail címe:</label>
                        <input type="email" class="form-control" id="email" v-model="form.email">
                        <div class="form-text text-danger">
                            {{ hasError('email') }}
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="phone">Telefonszáma:</label>
                        <input type="text" class="form-control" id="phone" v-model="form.phone">
                        <div class="form-text text-danger">
                            {{ hasError('phone') }}
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="password">Jelszava</label>
                        <input type="password" class="form-control" id="password" v-model="form.password">
                        <div class="form-text text-danger">
                            {{ hasError('password') }}
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="password_confirmation">Jelszó megerősítés</label>
                        <input type="password" class="form-control" id="password_confirmation" v-model="form.password_confirmation">
                        <div class="form-text text-danger">
                            {{ hasError('password_confirmation') }}
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="aszf">
                            <input type="checkbox" name="aszf" id="aszf" v-model="form.aszf">
                            Regisztrációjával elfogadja az <router-link :to="{name: 'aszf'}">Átalános Szerződési Feltételeket</router-link> és <router-link :to="{name: 'data'}">Adatkezelési Nyilatkozatunkat.</router-link>
                        </label>
                        <div class="form-text text-danger">
                            {{ hasError('aszf') }}
                        </div>
                    </div>

                    <div class="text-end mt-4">
                        <button type="submit" class="btn btn-primary">Regisztrálok</button>
                    </div>

                    <div class="mt-4">
                        <p class="form-text">
                            Rendelkezik fiókkal? Kattintson <router-link :to="{name: 'login'}">ide</router-link> a bejelentkezéshez.
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'register',
        data() {
            return {
                form: {
                    name: '',
                    email: '',
                    phone: '',
                    password: '',
                    password_confirmation: '',
                    aszf: ''
                },
                errors: {}
            }
        },
        methods: {
            submitForm() {
                const that = this;
                this.errors = {};

                axios.post("/api/registration", that.form)
                    .then(response => {
                        if (response.data.status === 'success') {
                            //Successful registration
                            this.$store.commit('login', [ response.data.data.user.id, response.data.data.token, response.data.data.user.profile ]);
                            that.$router.push({ name: 'cars_index'});
                        } else {
                            //Failed to register the user, show errors
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
        }
    }
</script>