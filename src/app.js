const { join } = require('path');
require('env2')('.env');
const express = require('express');
const compression = require('compression');
const cors = require('cors');
const { router } = require('./routes');
const { serveRoot } = require('./controllers');

const app = express();
app.disable('etag');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());

app.use('/api/v1/product', router);

const { NODE_ENV } = process.env;

// if (NODE_ENV === 'production') {
app.use(express.static(join(__dirname, '..', 'client', 'build')));
app.get('*', serveRoot);
// }

app.set('port', process.env.PORT || 3001);

module.exports = app;
