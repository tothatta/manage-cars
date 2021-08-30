import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        loggedIn: false,
        userId: null,
        token: null
    },
    mutations: {
        //setup frontend for the logged in user
        login(state, payload){
            state.loggedIn = true;
            state.userId = payload[0];
            state.token = payload[1];
            state.resources = payload[2];
        },
        logout(state){
            state.loggedIn = false;
            state.userId = null;
            state.token = null;
            state.resources = null;
        }
    },
    getters:{
        getLoggedIn: state => {
            return state.loggedIn;
        },
        getUserId: state => {
            return state.userId;
        },
        getToken: state => {
            return state.token;
        }
    }
});

export default store;