<template>
    <article>
        <h3 v-if="country.visited==false">{{ country.name }}</h3>
    </article>
</template>

<script>
export default {
  props: ['country']
};
</script>

<style>

</style>
