<template>
    <section>
        <div id="ul-container">
            <ul>
                <h2>Been To:</h2>
                <CountryVisited
                    v-for="(country, index) in countries"
                    :key="index"
                    :country="country"
                />
            </ul>
            <ul>
                <h2>Bucket List:</h2>
                <CountryNotVisited
                    v-for="(country, index) in countries"
                    :key="index"
                    :country="country"
                />
            </ul>
        </div>
        <AddCountry :on-add="handleAdd"/>
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
  methods: {
    handleAdd(country) {
      return api.addCountry(country)
        .then(saved => {
          this.countries.push(saved);
        });
    }
  }
};
</script>

<style>
ul {
    color: white;
}

#ul-container {
    display: grid;
    grid-template-columns: 500px 500px;
    border: 5px solid white;
}

</style>
