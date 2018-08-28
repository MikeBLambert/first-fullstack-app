export default {
    getCountries() {
        return fetch('http://localhost:3000/api/countries', {
            headers: { 'Content-Type' : 'application/json' }
        })
            .then(response => response.json())
            .then(console.log("yo"));
    }
}