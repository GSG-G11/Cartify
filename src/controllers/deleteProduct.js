const { deleteProductQuery } = require('../database/queries');
const { customizedError } = require('../utils');
const { deleteProductValidation } = require('../utils/validation');

const deleteProduct = (req, res, next) => {
  deleteProductValidation(req.query)
    .then(() => deleteProductQuery(req.query))
    .then(({ rowCount }) => {
      if (rowCount === 0) {
        res.status(400).json(customizedError(400, 'Bad Request'));
      } else {
        res.json({
          status: 200,
          message: 'deleted successfully',
        });
      }
    })
    .catch((err) => next(err));
};

module.exports = { deleteProduct };
