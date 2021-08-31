const routes = [
    {
        path: '/',
        component: () => import('../Pages/Auth/Login.vue'),
        name: 'login'
    },
    {
        path: '/adatkezelesi-nyilatkozat',
        component: () => import('../Pages/DataManagement.vue'),
        name: 'data'
    },
    {
        path: '/altalanos-szerzodesi-feltetelek',
        component: () => import('../Pages/Aszf.vue'),
        name: 'aszf'
    },
    {
        path: '/belepes',
        component: () => import('../Pages/Auth/Login.vue'),
        name: 'login'
    },
    {
        path: '/regisztracio',
        component: () => import('../Pages/Auth/Register.vue'),
        name: 'register'
    },
    {
        path: '/gepjarmuvek-lista',
        component: () => import('../Pages/Cars/Index.vue'),
        name: 'cars_index',
        meta: { requiresAuth: true }
    },
    {
        path: '/profile',
        component: () => import('../Pages/Profile/Edit.vue'),
        name: 'profile',
        meta: { requiresAuth: true }
    },
];

export default routes;