import React from 'react';
import PropTypes from 'prop-types';

const Card = ({
  img, title, category, price,
}) => (
  <div className="card">
    <img src={img} alt="Image Error" />
    <h2>{title}</h2>
    <span className="category">{category}</span>
    <h3>{price}</h3>

    <div>
      <button className="card_button button">Edit</button>
      <button className="card_button button">Delete</button>
    </div>
  </div>
);

Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Card;
