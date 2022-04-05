import React from 'react';
import PropTypes from 'prop-types';
import '../../stylesheet/Home.css';

const Card = ({
  id, img, title, category, price, forCarts, DeleteItem,
}) => {
  const addToCart = () => {
    const carts = JSON.parse(localStorage.getItem('carts')) || [];
    carts.push({
      id, img, title, category, price,
    });
    localStorage.setItem('carts', JSON.stringify(carts));
  };
  return (<div className="card">
    <img src={img} alt="Image Error" />
    <h2>{title}</h2>
    <span className="category">{category}</span>
    <h3>{price}</h3>
   {!forCarts ? <button
      className="button"
      onClick={() => addToCart()} >
      Add to Cart
    </button> : <button className="button" onClick={() => DeleteItem(id)}>Delete</button>}
  </div>
  );
};
Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  forCarts: PropTypes.bool.isRequired,
  DeleteItem: PropTypes.func.isRequired,

};

export default Card;
