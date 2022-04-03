const { join } = require('path');
require('env2')('.env');
const express = require('express');
const compression = require('compression');
const router = require('./routes');
const { pageNotFound, serverError } = require('./controllers');

const app = express();
app.disable('etag');
app.disable('x-powered-by');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());

app.use(express.static(join(__dirname, '..', 'public')));

app.use(router);
app.use(pageNotFound);
app.use(serverError);

app.set('port', process.env.PORT || 3000);

module.exports = app;
