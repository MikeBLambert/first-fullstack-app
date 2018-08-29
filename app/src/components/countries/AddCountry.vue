<template>
    <section class="add-country">
        <h1>Add New Country</h1>
        <form @submit.prevent="handleSubmit">
            <label>
                Country Name: 
                <input type="text" name="name" placeholder="name" required
                    v-model="country.name">
            </label>
            <label>
                Population: 
                <input type="number" name="population" placeholder="population"
                    v-model="country.population">
            </label>
            <label>
                Visited?: 
                Yes <input type="radio" name="visited" value=1 v-model="country.visited">
                No <input type="radio" name="visited" value=0 v-model="country.visited">
            </label>
            <button type="submit">Add</button>
        </form>
    </section>
</template>

<script>

const initCountry = () => {
    return {
        name: '',
        population: '',
        visited: '',
    };
};

export default {
    props: {
        onAdd: {
            type: Function,
            required: true
        }
    },
    data() {
        return {
            country: initCountry()
        }
    },
    methods: {
        handleSubmit() {
            this.onAdd(this.country)
                .then(() => {
                    this.country = initCountry();
                });
        }
    }
};
</script>

<style>

.add-country {
  width: 300px;
  text-align: left;
  margin: auto;
}

label {
  display: block;
  margin: 25px;
  font-size: 25px;
}
</style>
