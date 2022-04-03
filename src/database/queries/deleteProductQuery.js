const { connection } = require('../config/connection');

const deleteProductQuery = ({ id }) => connection.query('DELETE FROM products WHERE id=$1', [id]);
module.exports = { deleteProductQuery };
