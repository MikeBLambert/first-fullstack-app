<template>
    <main>
        <div></div>
        <h2>{{country.name}}{{ $route.params.id }}</h2>
    </main>
</template>

<script>

import api from '../../services/api';

export default {
    created() {
        this.country = api.getCountry(this.$route.params.id)
        console.log(this.country)
    
    }

}

</script>

<style>

</style>

