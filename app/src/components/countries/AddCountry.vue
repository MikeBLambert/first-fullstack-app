<template>
    <section class="add-country">
        <h1>Add New Country</h1>
        <form>
            <label>
                Country Name: <input type="text" name="name" placeholder="name">
            </label>
            <label>
                Population: <input type="number" name="population" placeholder="population">
            </label>
            <label>
                Visited?: 
                Yes <input type="radio" name="visited" value="yes">
                No <input type="radio" name="visited" value="no">
            </label>
        </form>
    </section>
</template>

<script>

const fullCountry = () => {
    return {
        name: '',
        population: '',
        visited: '',
    }
}
export default {

}
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
