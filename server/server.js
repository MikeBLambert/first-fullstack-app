const express = require('express');
const app = express();

const morgan = require('morgan');
app.use(morgan('dev'));

const cors = require('cors');
app.use(cors());
app.use(express.json());

const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://postgres:password@localhost:5432/countries';
const client = new Client(databaseUrl);
client.connect();

app.get('/api/country_visit_info', (req, res) => {
  client.query(`
    SELECT
      id,
      name,
      visited,
      times
    FROM country_visit_info;  
  `)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => console.log(err));
});

app.get('/api/country_visit_info/:id', (req, res) => {
  client.query(`
    SELECT 
      id,
      name,
      visited,
      times
    FROM country_visit_info;
    WHERE id = $1;
  `,
  [req.params.id]
  )
    .then(result => {
      res.send(result.rows[0]);
    })
    .catch(err => console.log(err));
});

app.post('/api/country_visit_info', (req, res) => {
  console.log('posting');
  const body = req.body;

  client.query(`
    INSERT INTO country_visit_info (name, visited, times)
    VALUES ($1, $2, $3)
    RETURNING *;
  `,
  [body.name, body.visited, body.times]
  )
    .then(result => {
      // we always get rows back, in this case we just want first one.
      res.send(result.rows[0]);
    })
    .catch(err => console.log(err));
});


app.listen(3000, () => console.log('app humming along...'));
