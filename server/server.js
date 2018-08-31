
const express = require('express');
const app = express();

const morgan = require('morgan');
app.use(morgan('dev'));

const cors = require('cors');
app.use(cors());
app.use(express.json());

const client = require('./db-client');

//routes
app.get('/api/country-visit-info', (req, res) => {
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

app.get('/api/country-visit-info/:id', (req, res) => {
  client.query(`
    SELECT 
      id,
      name,
      visited,
      times
    FROM country_visit_info
    WHERE id = $1;
  `,
  [req.params.id]
  )
    .then(result => {
      res.send(result.rows[0]);
    })
    .catch(err => console.log(err));
});

app.post('/api/country-visit-info', (req, res) => {
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

app.get('/api/languages', (req, res) => {
  client.query(`
    SELECT *
    FROM languages;
  `)
    .then(result => {
      res.send(result.rows)
    })
})


app.listen(3000, () => console.log('app humming along...'));
