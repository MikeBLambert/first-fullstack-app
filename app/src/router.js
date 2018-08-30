import VueRouter from 'vue-router';
import Home from './components/home/Home.vue';
import Countries from './components/countries/Countries.vue';
import CountryDetail from './components/countries/CountryDetail.vue';

export default new VueRouter({
  routes:[
    { path: '/', component: Home },
    { path: '/countries', component: Countries },
    { path: '/countries/:id', component: CountryDetail },
    { path: '*', redirect: '/' },
  ]
});