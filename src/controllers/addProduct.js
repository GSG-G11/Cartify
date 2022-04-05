const { addProductQuery } = require('../database/queries');
const { customizedError } = require('../utils');
const { addProudctValidation } = require('../utils/validation');

const addProduct = (req, res, next) => {
  addProudctValidation(req.body)
    .then(() => addProductQuery(req.body))
    .then(({ rows }) => res.json(rows))
    .catch((err) => {
      if (err.details) {
        res.status(400).json(customizedError(400, err.details[0].message));
      } else {
        next(err);
      }
    });
};
module.exports = { addProduct };
