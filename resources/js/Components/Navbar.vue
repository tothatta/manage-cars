<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <router-link class="navbar-brand" :to="{name: 'cars_index'}">Flottakezelő</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0" v-if="loggedIn">
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{name: 'cars_index'}">Gépjárművek listája</router-link>
                    </li>
                    <li class="nav-item" v-if="isAdmin()">
                        <router-link class="nav-link" :to="{name: 'users_index'}">Munkatársak listája</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{name: 'profile'}">Adataim</router-link>
                    </li>
                </ul>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0" v-else>
                    <li class="nav-item">
                        <router-link :to="{name: 'login'}" class="nav-link">Belépés</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name: 'register'}" class="nav-link">Regisztráció</router-link>
                    </li>
                </ul>
                <ul class="navbar-nav ms-auto" v-if="loggedIn">
                    <li class="nav-item">
                        <span role="button" class="text-white" @click="logout">Kilépés</span>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    import { mapState } from 'vuex';
    import axios from 'axios';

    export default {
        name: 'Navbar',
        computed: {
            ...mapState({
                loggedIn: state => state.loggedIn,
                profile: state => state.profile,
                token: state => state.token
            })
        },
        methods: {
            isAdmin() {
                return this.$store.getters.getProfile === 'admin';
            },
            logout() {
                const that = this;

                axios.get("/api/logout", {}, {
                    headers: {
                        Authorization: 'Bearer ' + that.token
                    }
                })
                    .then(response => {
                        if (response.data.status !== 'success') {
                            response.data.messages.forEach(message => {
                                this.errors.push(message);
                            });
                        }
                    });

                that.$store.commit('logout');
                sessionStorage.clear();
                that.$router.push({ name: 'login' });
            }
        }
    }
</script>