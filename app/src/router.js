import VueRouter from 'vue-router';
import Home from './components/home/Home.vue';
import Countries from './components/countries/Countries.vue';
import CountryDetail from './components/countries/CountryDetail.vue';
import AddCountry from './components/countries/AddCountry.vue';

export default new VueRouter({
  routes:[
    { path: '/', component: Home },
    { path: '/countries', component: Countries },
    { path: '/countries/add', component: AddCountry },
    { path: '/countries/:id', component: CountryDetail },
    { path: '*', redirect: '/' },
  ]
});