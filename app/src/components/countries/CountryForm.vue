<template>
    <section>
        <form @submit.prevent="handleSubmit">
            <h2>{{ country.name }}</h2>
            <label>
                No. of Visits: <input type="number" name="visits">
            </label>
            <button type="submit">Submit</button>
        </form>
    </section>
</template>

<script>
export default {
    props: {
        country: Object
    },
    methods: {
        handleSubmit() {
            // not right.
            this.onEdit(XXXX)
        }
    }
}
</script>

<style>

</style>
