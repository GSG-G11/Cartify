const { addProduct } = require('./addProduct');
const { deleteProduct } = require('./deleteProduct');

const { notFound } = require('./notFound');
const { serverError } = require('./serverError');
const { serveRoot } = require('./serveRoot');

module.exports = {
  serveRoot,
  addProduct,
  deleteProduct,
  notFound,
  serverError,
};
