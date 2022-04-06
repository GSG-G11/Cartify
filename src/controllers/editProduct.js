const { editProductValidation } = require('../utils/validation');
const { getProductQuery, editProductQuery } = require('../database/queries');
const { customizedError } = require('../utils');

const editProduct = (req, res, next) => {
  editProductValidation(req.body)
    .then(() => editProductQuery(req.body))
    .then(() => getProductQuery())
    .then(({ rows }) => {
      if (rows.length === 0) {
        res.status(400).json(customizedError(400, 'Bad Request'));
      } else {
        res.json(rows);
      }
    })
    .catch((err) => {
      if (err.details) {
        res.status(400).json(customizedError(400, err.details[0].message));
      } else {
        next(err);
      }
    });
};

module.exports = { editProduct };
