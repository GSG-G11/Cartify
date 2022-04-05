const { connection } = require('../config/connection');

const editProductQuery = ({
  id, title, description, price, category, imgUrl,
}) => connection.query(
  'UPDATE products SET title=$1, description=$2, price=$3, category=$4, img_url=$5 WHERE id=$6 RETURNING *',
  [title, description, price, category, imgUrl, id],
);
module.exports = { editProductQuery };
