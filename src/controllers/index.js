const { addProduct } = require('./addProduct');
const { deleteProduct } = require('./deleteProduct');
const { editProduct } = require('./editProduct');
const { getProducts } = require('./getProducts');
const { notFound } = require('./notFound');
const { serverError } = require('./serverError');
const { serveRoot } = require('./serveRoot');

module.exports = {
  serveRoot,
  addProduct,
  deleteProduct,
  editProduct,
  notFound,
  serverError,
  getProducts,
};
