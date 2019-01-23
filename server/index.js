const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const mainRoute = require('./routes/mainRoutes');
const db = require('../database/index');

//models
const personalNotes = require('../database/model/personalNotes');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(
  '/scripts',
  express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js/'))
);

app.use('/', mainRoute);

module.exports = app;
