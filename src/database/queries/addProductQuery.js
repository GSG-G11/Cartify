const { connection } = require('../config/connection');

const addProductQuery = ({
  title, description, price, category, imgUrl,
}) => connection.query('INSERT INTO products (title,description,price,category,img_url) VALUES ($1,$2,$3,$4,$5)', [title, description, price, category, imgUrl]);
module.exports = { addProductQuery };
