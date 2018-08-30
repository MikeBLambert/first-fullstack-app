const client = require('../db-client');
const countries = require('../data/country-visit-info.json');

Promise.all(
    countries.map(country => {
        return client.query(`
            INSERT INTO country_visit_info (name, visited, times)
            VALUES ($1, $2, $3);
     
        `,
        [country.name, country.visited, country.times]
        );
    })
)
    .then(
        () => console.log('seed data load successful'),
        err => console.log(err)
    )
    .then(() => client.end());

//     SELECT 
//     id,
//     $1 as name,
//     $2 as visited,
//     $3 as times
// FROM countries
// WHERE direction = $4; 