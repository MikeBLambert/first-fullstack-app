<template>
    <main>
        <div></div>
        <h2>{{country.name}}{{ $route.params.id }}</h2>
        <router-view></router-view>
    </main>
</template>

<script>

import api from '../../services/api';

export default {
    data() {
        return {
            country: api.getCountry(this.$route.params.id)   
            // country: api.getCountries() 
        }
    },
    created() {
        country.getCountries()
            .then(country.find(element => element.id === id))
            console.log(country)
    }
}

</script>

<style>

</style>

