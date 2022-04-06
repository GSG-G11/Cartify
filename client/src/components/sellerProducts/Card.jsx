import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const Card = ({
  img, title, category, price, id, updateProducts,
}) => (
  <div className="card">
    <img src={img} alt="Image Error" />
    <h2>{title}</h2>
    <span className="category">{category}</span>
    <h3>{price}</h3>

    <div>
      <button className="card_button button">Edit</button>
      <button className="card_button button" onClick={() => {
        axios.delete(`/api/v1/product?id=${id}`)
          .catch(() => axios.delete(`http://localhost:3001/api/v1/product?id=${id}`))
          .then((res) => res.data)
          .then((products) => updateProducts(products));
      }
      }>Delete</button>
    </div>
  </div>
);

Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  updateProducts: PropTypes.func.isRequired,
};

export default Card;
