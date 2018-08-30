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
                <!-- Yes <input v-on:click="handleValueClick" type="radio" name="visited" value="true" v-model="country.visited">
                No <input type="radio" name="visited" value="false" v-model="country.visited"> -->
                <input v-on:click="handleValueClick" type="checkbox" name="visited" v-model="country.visited">
            </label>
            <label v-if="country.visited==true">
                Times Visited: 
                <input type="number" name="times" placeholder="Times visited"
                    v-model="country.times">
            </label>
            <button type="submit">Add</button>
        </form>
    </section>
</template>

<script>

const initCountry = () => {
  return {
    name: '',
    visited: false,
    times: 0,
  };
};

export default {
  props: {
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
    margin-left: 85px;
    border-radius: 15px;
    font-size: 20px;
}


</style>
