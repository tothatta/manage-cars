const routes = [
    {
        path: '/',
        component: () => import('../Pages/Auth/Login.vue'),
        name: 'login',
        meta: { requiresGuest: true }
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
        name: 'login',
        meta: { requiresGuest: true }
    },
    {
        path: '/regisztracio',
        component: () => import('../Pages/Auth/Register.vue'),
        name: 'register',
        meta: { requiresGuest: true }
    },
    {
        path: '/gepjarmuvek',
        component: () => import('../Pages/Cars/Index.vue'),
        name: 'cars_index',
        meta: { requiresAuth: true }
    },
    {
        path: '/gepjarmuvek/letrehozas',
        component: () => import('../Pages/Cars/Create.vue'),
        name: 'cars_create',
        meta: { requiresAuth: true }
    },
    {
        path: '/gepjarmuvek/:id',
        component: () => import('../Pages/Cars/Edit.vue'),
        name: 'cars_edit',
        meta: { requiresAuth: true }
    },
    {
        path: '/munkatarsak',
        component: () => import('../Pages/Users/Index.vue'),
        name: 'users_index',
        meta: { requiresAuth: true }
    },
    {
        path: '/munkatarsak/:id',
        component: () => import('../Pages/Users/Edit.vue'),
        name: 'users_edit',
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