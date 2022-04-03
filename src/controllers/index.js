const { addProduct } = require('./addProduct');
const { notFound } = require('./notFound');
const { serverError } = require('./serverError');
const { serveRoot } = require('./serveRoot');

module.exports = {
  serveRoot,
  addProduct,
  notFound,
  serverError,
};
