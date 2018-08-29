<template>
    <article>
        <h3 v-if="country.visited==true">{{ country.name }} ({{country.times}} times)</h3>
    </article>
</template>

<script>
export default {
  props: ['country']
};
</script>

<style>

</style>
