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
  created() {
    
  },
  props: ['country']
   
  // country: Object
  

};
</script>

<style>

</style>
