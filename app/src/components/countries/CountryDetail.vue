<template>
    <article v-if="!editing">
        <main v-if="country">
            <h2>{{country.name}}</h2>
            <h2>Number of Visits: {{country.times}}</h2>
            <h2>Primary Country Language: {{country.language}}</h2>
            <button @click="editing = !editing">{{ editing ? 'Cancel' : 'Edit'}}</button>
            <button>Delete</button>
        </main>
    </article>
    <CountryForm 
        v-else
        :country="country"
        :onEdit="handleUpdate"/>
</template>

<script>

import api from '../../services/api';
import CountryForm from './CountryForm';

export default {
    data() {
        return {
            country: null,
            editing: false
        }
    },
    created() {
        api.getCountry(this.$route.params.id) 
            .then(country => { 
                this.country = country   
            })
    },
    components: {
        CountryForm,
    },
    methods: {
        handleUpdate(toUpdate) {
            console.log(toUpdate)
            return api.updateCountry(toUpdate)
                .then(update => {
                    this.country = update;
                    this.editing = false;
                })
        }

    }
}

</script>

<style>

h2 {
    color: white;
}
</style>

