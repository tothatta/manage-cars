<template>
    <div class="app">
        <Navbar></Navbar>

        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app',
        components: {
            Navbar: () => import('./Components/Navbar.vue')
        },
        created() {
            console.log('asd')
        }
    }
</script>