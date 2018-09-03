
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
    c.language_id as "languageId",
    l.name as language
  FROM country_visit_info as c
  JOIN languages as l
  ON c.language_id = l.id
  ORDER BY c.name;
  `)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => console.log(err));
});

app.get('/api/country-visit-info/:id', (req, res) => {
  client.query(`
    SELECT 
      c.id,
      c.name,
      c.language_id as "languageId",
      l.name as "language",
      c.visited,
      c.times
    FROM country_visit_info as c
    JOIN languages as l
    ON c.language_id = l.id
    WHERE c.id = $1;
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
    INSERT INTO country_visit_info (name, language_id, visited, times)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
  `,
  [body.name, body.languageId, body.visited, body.times]
  )
    .then(result => {
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
      res.send(result.rows);
    });
});

app.put('/api/country-visit-info/:id', (req, res) => {
  const body = req.body;

  client.query(`
    UPDATE country_visit_info
    SET
      visited = $1,
      times = $2,
      language_id = $3
    WHERE id = $4
    RETURNING *;
    `,
  [body.visited, body.times, body.languageId, req.params.id]
  ).then(result => {
    res.send(result.rows[0]);
  });
});

app.delete('/api/country-visit-info/:id', (req, res) => {
  client.query(`
    DELETE FROM country_visit_info WHERE id=$1;
  `,
  [req.params.id]
  ).then(() => {
    res.send({ removed: true });
  });
});


app.listen(3000, () => console.log('app humming along...'));
