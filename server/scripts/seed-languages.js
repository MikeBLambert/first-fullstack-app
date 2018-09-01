const client = require('../db-client');
const languages = require('../data/languages.json');

Promise.all(
    Object.values(languages).map(language => {
        return client.query(`
            INSERT INTO languages (name)
            VALUES ($1);
        `,
        [language.name]
        );
    })
)
    .then(
        () => console.log('seed data load successful'),
        err => console.log(err)
    )
    .then(() => client.end());

