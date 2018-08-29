<template>
    <section>
        <ul>
            <h2>Countries You've Visited:</h2>
            <CountryVisited
                v-for="(country, index) in countries"
                :key="index"
                :country="country"
            />
        </ul>
        <ul>
            <h2>Countries You Have Yet To Visit:</h2>
            <CountryNotVisited
                v-for="(country, index) in countries"
                :key="index"
                :country="country"
            />
        </ul>
        <AddCountry/>
    </section>
</template>

<script>
import CountryNotVisited from './CountryNotVisited.vue';
import CountryVisited from './CountryVisited.vue';
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
        CountryVisited,
        AddCountry,
        CountryNotVisited
    },
}
</script>

<style>

</style>
