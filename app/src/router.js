import VueRouter from 'vue-router';
import Home from './components/home/Home.vue';
import Countries from './components/countries/Countries.vue';

export default new VueRouter({
    routes:[
        { path: '/', component: Home },
        { path: '/countries', component: Countries },
        { path: '*', redirect: '/' }
    ]
});