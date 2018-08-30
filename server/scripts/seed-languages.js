const client = require('../db-client');
const countries = require('../data/languages.json');

Promise.all(
    countries.map(language => {
        return client.query(`
            INSERT INTO languages (name, native)
            VALUES ($1, $2);
        `,
        [language.name, language.native]
        );
    })
)
    .then(
        () => console.log('seed data load successful'),
        err => console.log(err)
    )
    .then(() => client.end());
