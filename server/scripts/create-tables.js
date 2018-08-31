const client = require('../db-client');

client.query(`
  CREATE TABLE IF NOT EXISTS languages (
    id SERIAL PRIMARY KEY,
    name VARCHAR(256) NOT NULL
  );

  CREATE TABLE IF NOT EXISTS country_visit_info (
    id SERIAL PRIMARY KEY,
    name VARCHAR(256) NOT NULL,
    language_id INTEGER REFERENCES languages(id),
    visited BOOLEAN,
    times INTEGER
  );
`)
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  ) 
  .then(() => {
    client.end();
  });

