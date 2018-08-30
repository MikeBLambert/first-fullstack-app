<template>
    <main v-if="country">
        <div></div>
        <h2>You have been to {{country.name}} {{country.times}} times.</h2>
    </main>
</template>

<script>

import api from '../../services/api';

export default {
    data() {
        return {
            country: null,
        }
    },
    created() {
        api.getCountry(this.$route.params.id) 
            .then(country => { 
                this.country = country        
            })
    }
}

</script>

<style>

h2 {
    color: white;
}
</style>

