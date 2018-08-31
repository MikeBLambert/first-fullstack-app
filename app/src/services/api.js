const URL = 'http://localhost:3000/api';
const COUNTRY_VISIT_URL =  `${URL}/country-visit-info`
const LANGUAGES_URL = `${URL}/languages` 

export default {
  getCountries() {
    return fetch(COUNTRY_VISIT_URL, {
      headers: { 'Content-Type' : 'application/json' }
    })
      .then(response => response.json());
  },
  getCountry(id) {
    return fetch(`${COUNTRY_VISIT_URL}/${id}`, {
      headers: { 'Content-Type' : 'application/json' }
    })
      .then(response => response.json());
  },
  addCountry(country) {
    return fetch(COUNTRY_VISIT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(country)
    })
      .then(response => response.json());
  },
  getLanguages() {
    return fetch(LANGUAGES_URL, {
      headers: { 'Content-type' : 'application/json' }
    })
      .then(response => response.json());
  }
};