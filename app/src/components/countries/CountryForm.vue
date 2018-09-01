<template>
    <section>
        <form @submit.prevent="handleSubmit">
            <h2>{{ country.name }}</h2>
             <label>
                Check if you've been there before: 
                <input v-on:click="handleValueClick" type="checkbox" name="visited" v-model="edit.visited">
            </label>
            <label v-if="country.visited==true">
                No. of Visits: <input type="number" name="times" v-model.number="edit.times">
            </label>
            <button type="submit">Submit</button>
        </form>
    </section>
</template>

<script>

const initCountry = () => {
    return {
        times: false,
        visited: 0
    };
};

export default {
    props: {
        country: Object,
        onEdit: {
            type: Function,
            required: true
        }
    },
    data() {
        return {
            edit: this.country ? Object.assign({}, this.country) : initCountry()
        };
    },
    computed: {
        editMode() {
            return !!this.country;
        }
    },
    methods: {
        handleSubmit() {
            this.onEdit(this.edit)
                .then(() => {
                    this.edit = initCountry();
                });
        },
        handleValueClick(){
            this.country.visited = true;
        },
    }
}
</script>

<style>

</style>
