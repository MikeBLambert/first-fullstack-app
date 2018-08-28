const express = require('express');

const app = express();

//SERVER SETUP
const morgan = require('morgan');
app.use(morgan('dev'));

const cors = require('cors');
app.use(cors());

app.use(express.json());

const fs = require('fs');

const dataPath = 'data/countries.json';

