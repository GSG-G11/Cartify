const router = require('express').Router();
const {
  addProduct, notFound, serverError, deleteProduct,
} = require('../controllers');

router.route('api/v1/product').get().post(addProduct).delete(deleteProduct)
  .patch();
router.use(notFound);
router.use(serverError);
module.exports = { router };
