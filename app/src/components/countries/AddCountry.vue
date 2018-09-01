<template>
    <section class="add-country">
        <h1 id="add-country-h1">Add New Country ---></h1>
        <form @submit.prevent="handleSubmit">
            <label>
                Country Name: 
                <input type="text" name="Name" placeholder="name" required
                    v-model="country.name">
            </label>
            <label>
                Check if you've been there before: 
                <input v-on:click="handleValueClick" type="checkbox" name="visited" v-model="country.visited">
            </label>
            <label v-if="country.visited==true">
                Times Visited: 
                <input type="number" name="times" placeholder="Times visited"
                    v-model="country.times">
            </label>
            <label v-if="country.visited==true">
              What is the primary official language?
                <select>
                  <option disabled value="">Please select a language</option>
                  <option 
                    v-for="language in languages"
                    :key="language.id"
                    :value="language.id"
                  >
                  {{language.name}}  
                  </option>
                </select>
            </label>
            <button type="submit">Add</button>
        </form>
    </section>
</template>

<script>
import api from '../../services/api';

const initCountry = () => {
  return {
    name: '',
    visited: false,
    times: 0,
  };
};

export default {
  props: {
    languages: Array,
    onAdd: {
      type: Function,
      required: true
    }, 
  },
  data() {
    return {
      country: initCountry(),      
    };
  },
  methods: {
    handleValueClick(){
      this.country.visited = true;
    },
    handleSubmit() {
      this.onAdd(this.country)
        .then(() => {
          this.country = initCountry();
        });
    },
  }
};
</script>

<style>

.add-country {
    width: 300px;
    display: grid;
    grid-template-columns: 300px 300px;
    grid-template-rows: 200px 200px;
    text-align: left;
    margin: auto;
    align-content: center;
}

label {
    display: block;
    color: white;
    margin: 25px;
    font-size: 20px;
}

#add-country-h1 {
    font-size: 35px;
}

button {
    /* margin-left: 85px; */
    border-radius: 10px;
    font-size: 20px;
    margin: 15px;
}


</style>
