<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-12 col-lg-6 offset-0 offset-lg-3 auth-container">
                <h1 class="mb-4">Belépés</h1>

                <form action="" v-on:submit.prevent="submitForm()">
                    <div class="mb-3">
                        <label for="email">E-mail cím</label>
                        <input type="email" class="form-control" id="email" v-model="form.email">
                        <div class="form-text text-danger">
                            {{ hasError('email') }}
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="password">Jelszó</label>
                        <input type="password" class="form-control" id="password" v-model="form.password">
                        <div class="form-text text-danger">
                            {{ hasError('password') }}
                        </div>
                    </div>

                    <div class="text-end mt-4">
                        <button type="submit" class="btn btn-primary">Belépés</button>
                    </div>

                    <div class="mt-4">
                        <p class="form-text">
                            Még nem rendelkezik fiókkal? Kattintson <router-link :to="{name: 'register'}">ide</router-link> a regisztrációhoz.
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'login',
        data() {
            return {
                form: {
                    email: '',
                    password: ''
                },
                errors: {}
            }
        },
        methods: {
            submitForm() {
                const that = this;
                this.errors = {};

                axios.post("/api/login", that.form)
                    .then(response => {
                        if (response.data.status === 'success') {
                            //Successful registration
                            this.$store.commit('login', [ response.data.data.user.id, response.data.data.token, response.data.data.user.profile ]);
                            that.$router.push({ name: 'cars_index'});
                        } else {
                            //Failed to register the user, show errors
                            for(const error in response.data.messages){
                                that.$set(that.errors, error, response.response.data.messages[error]);
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