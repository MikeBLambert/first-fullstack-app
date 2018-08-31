
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
    c.id, 
    c.name,
    c.visited,
    c.times, 
    l.name as langName
  FROM country_visit_info as c
  JOIN languages as l
  ON c.language_id = l.id
  ORDER BY c.name
  ;
  `)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => console.log(err));
});
// app.get('/api/country-visit-info', (req, res) => {
//   client.query(`
//     SELECT
//       id,
//       name,
//       visited,
//       times
//     FROM country_visit_info
//     JOIN 
//     ;  
//   `)
//     .then(result => {
//       res.send(result.rows);
//     })
//     .catch(err => console.log(err));
// });

app.get('/api/country-visit-info/:id', (req, res) => {
  client.query(`
    SELECT 
      id,
      name,
      language_id as "languageID",
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
    VALUES ($1, $3, $4)
    RETURNING *;
  `,
  [body.name, body.languageId, body.visited, body.times]
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
    FROM languages
    ORDER BY name ASC;
  `)
    .then(result => {
      res.send(result.rows)
    })
})


app.listen(3000, () => console.log('app humming along...'));
