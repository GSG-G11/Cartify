const { addProductQuery } = require('../database/queries');
const { customizedError } = require('../utils');
const { addProudctValidation } = require('../utils/validation');

const addProduct = (req, res, next) => {
  addProudctValidation(req.body)
    .then(() => addProductQuery(req.body))
    .then(() => res.json({ status: 200, msg: 'new product added successfully' }))
    .catch((err) => {
      if (err.details) {
        res.status(400).json(customizedError(400, err.details[0].message));
      } else {
        next(err);
      }
    });
};
module.exports = { addProduct };
