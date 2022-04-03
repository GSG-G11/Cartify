const { getProductQuery } = require('../database/queries');

const getProducts = (req, res, next) => {
  getProductQuery()
    .then(({ rows }) => res.json(rows))
    .catch((err) => {
      next(err);
    });
};
module.exports = { getProducts };
