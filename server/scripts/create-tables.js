const pg = require('pg');

const Client = pg.Client;

const databaseUrl = 'postgres://postgres:password@localhost:5432/countries';

const client = new Client(databaseUrl);

client.connect()
  .then(() => {
    return client.query(`
      CREATE TABLE IF NOT EXISTS country_visit_info (
        id SERIAL PRIMARY KEY,
        name VARCHAR(256) NOT NULL,
        visited BOOLEAN,
        times INTEGER
      );
    `);
  })
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });