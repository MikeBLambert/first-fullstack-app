const pg = require('pg');

const Client = pg.Client;

const databaseUrl = 'postgres://postgres:password@localhost:5432/countries';

const client = new Client(databaseUrl);

client.connect()
  .then(() => {
    return client.query(`
    DROP TABLE IF EXISTS country_visit_info;
    `);
  })
  .then(
    () => console.log('drop tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });