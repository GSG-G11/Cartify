const router = require('express').Router();
const { addProduct, notFound, serverError } = require('../controllers');

router.post('/api/v1/product', addProduct);
/* router.route('api/v1/product').get().post(addProduct).delete()
  .patch(); */
router.use(notFound);
router.use(serverError);
module.exports = { router };
