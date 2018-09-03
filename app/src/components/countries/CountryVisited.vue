<template>
    <article>
        
        <router-link :to="`/countries/${country.id}`">
            <h3 v-if="country.visited==true">
                {{ country.name }}
            </h3>
        </router-link>
        
    </article>
</template>

<script>
export default {
  props: ['country']  

};
</script>

<style>

</style>
