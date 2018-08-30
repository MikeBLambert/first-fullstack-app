export default {
  getCountries() {
    return fetch('http://localhost:3000/api/country_visit_info', {
      headers: { 'Content-Type' : 'application/json' }
    })
      .then(response => (response.json()));
  },
  // getCountry(id) {
  //   return fetch('http://localhost:3000/api/country_visit_info', {
  //     headers: { 'Content-Type' : 'application/json' }
  //   })
  //     .then(response.find(country => country.id === id));
  // },
  addCountry(country) {
    return fetch('http://localhost:3000/api/country_visit_info', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(country)
    })
      .then(response => response.json());
  }
};