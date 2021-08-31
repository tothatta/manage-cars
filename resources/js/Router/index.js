import routes from "./routes";
import store from '../Store/index';
import VueRouter from 'vue-router';

const router = new VueRouter({
    mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
    let token = store.state.token;
    let user = store.state.userId;

    if(to.meta.requiresAuth) {
        if (token && user) {
            next();
        } else {
            next({name: 'login'});
        }
    } else if( to.meta.requiresGuest) {
        if(!token || !user) {
            next();
        }
        else {
            next({name: 'cars_index'});
        }
    } else {
        next();
    }
});

export default router;