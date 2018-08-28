<template>
    <section>
        <h2>Countries Visited</h2>
        <ul>
            <Country/>
        </ul>
        <AddCountry/>
    </section>
</template>

<script>
import Country from './Country';
import AddCountry from './AddCountry';


export default {
    compoonents: {
        Country,
        AddCountry
    },
}
</script>

<style>

</style>
