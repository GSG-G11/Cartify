const { editProductValidation } = require('../utils/validation');
const { editProductQuery } = require('../database/queries/editProductQuery');
const { customizedError } = require('../utils');

const editProduct = (req, res, next) => {
  editProductValidation(req.body)
    .then(() => editProductQuery(req.body))
    .then(({ rowCount }) => {
      if (rowCount === 0) {
        res.status(400).json(customizedError(400, 'Bad Request'));
      } else {
        res.json({
          status: 200,
          message: 'Updated Successfully',
        });
      }
    }).catch((err) => {
      if (err.details) {
        res.status(400).json(customizedError(400, err.details[0].message));
      } else {
        next(err);
      }
    });
};

module.exports = { editProduct };
