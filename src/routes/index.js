const router = require('express').Router();

const {
  addProduct, notFound, serverError, deleteProduct,
  editProduct,
  getProducts,
} = require('../controllers');

router.route('/api/v1/product').get(getProducts).post(addProduct).delete(deleteProduct)
  .patch(editProduct);
router.use(notFound);
router.use(serverError);
module.exports = { router };
