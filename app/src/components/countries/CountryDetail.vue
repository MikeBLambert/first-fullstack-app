<template>
    <article v-if="!editing">
        <main v-if="country">
            <router-link to="/countries">
                <button id="return">
                    Return To Your Travel Log
                </button>
            </router-link>
            <h2>{{country.name}}</h2>
            <h2>Number of Visits: {{country.times}}</h2>
            <h2>Primary Country Language: {{country.language}}</h2>
            <button id="editing-buttons" @click="editing = !editing">{{ editing ? 'Cancel' : 'Edit'}}</button>
            <button id="editing-buttons" @click="handleDelete">Delete</button>
            <br>
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
    };
  },
  created() {
    api.getCountry(this.$route.params.id) 
      .then(country => { 
        this.country = country;   
      });
  },
  components: {
    CountryForm,
  },
  methods: {
    handleUpdate(toUpdate) {
      console.log(toUpdate);
      return api.updateCountry(toUpdate)
        .then(update => {
          this.country = update;
          this.editing = false;
        });
    },
    handleDelete() {
      if(!confirm(`Are you sure you want to remove ${this.country.name} from your travel log?`)) {
        return;
      }

      return api.deleteCountry(this.country.id)
        .then(() => {
          this.$router.push('/countries');
        });
    },
  }
};

</script>

<style>

h2 {
    color: white;
}
#editing-buttons {
    margin-top: 25px;
    width: 125px;
}

#return {
    margin-top: 50px;
}
</style>

