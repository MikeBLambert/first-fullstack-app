<template>
    <section>
        <h2>Countries Visited</h2>
        <ul>
            <Country
                v-for="(country, index) in countries"
                :key="index"
                :country="country"
            />
        </ul>
        <AddCountry/>
    </section>
</template>

<script>
import Country from './Country.vue';
import AddCountry from './AddCountry.vue';
import api from '../../services/api';


export default {
    data() {
        return {
            countries: null
        };
    },
    created() {
        api.getCountries()
            .then(countries => { 
                this.countries = countries;
            });
    },
    components: {
        Country,
        AddCountry
    },
}
</script>

<style>

</style>
