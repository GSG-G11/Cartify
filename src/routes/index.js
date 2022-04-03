const router = require('express').Router();

const {
  addProduct, notFound, serverError, deleteProduct,
  editProduct,
} = require('../controllers');

router.route('/api/v1/product').get().post(addProduct).delete(deleteProduct)
  .patch(editProduct);
router.use(notFound);
router.use(serverError);
module.exports = { router };
