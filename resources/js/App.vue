<template>
    <div class="app">
        <Navbar></Navbar>

        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        name: 'app',
        components: {
            Navbar: () => import('./Components/Navbar.vue')
        },
        computed: {
            ...mapState({
                loggedIn: state => state.loggedIn,
                resources: state => state.resources,
                token: state => state.token,
                sidebar: state => state.sidebar
            })
        }
    }
</script>

<style>
    .fade-enter-active,
    .fade-leave-active {
        transition-duration: 0.15s;
        transition-property: opacity;
        transition-timing-function: ease;
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0
    }
</style>