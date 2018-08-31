export default {
  getCountries() {
    return fetch('http://localhost:3000/api/country-visit-info', {
      headers: { 'Content-Type' : 'application/json' }
    })
      .then(response => response.json());
  },
  getCountry(id) {
    return fetch(`http://localhost:3000/api/country-visit-info/${id}`, {
      headers: { 'Content-Type' : 'application/json' }
    })
      .then(response => response.json());
  },
  addCountry(country) {
    return fetch('http://localhost:3000/api/country-visit-info', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(country)
    })
      .then(response => response.json());
  }
};