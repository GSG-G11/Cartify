const { join } = require('path');
require('env2')('.env');
const express = require('express');
const compression = require('compression');
const router = require('./routes');
const { serveRoot } = require('./controllers');

const app = express();
app.disable('etag');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());

app.use(router);

const { NODE_ENV } = process.env;

if (NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '..', 'client', 'bulid')));
  app.get('*', serveRoot);
}

app.set('port', process.env.PORT || 3001);

module.exports = app;
