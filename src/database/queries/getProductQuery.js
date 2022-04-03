const { connection } = require('../config/connection');

const getProductQuery = () => connection.query('SELECT * FROM products');

module.exports = { getProductQuery };
