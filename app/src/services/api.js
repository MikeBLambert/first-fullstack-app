export default {
    getCountries() {
        return fetch('http://localhost:3000/api/countries', {
            headers: { 'Content-Type' : 'application/json' }
        })
            .then(response => response.json())
    },
    addCountry(country) {
        return fetch('http://localhost:3000/api/countries', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(country)
        })
            .then(response => response.json());
    }
};