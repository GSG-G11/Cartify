import React from 'react';
import PropTypes from 'prop-types';

import { useNavigate } from 'react-router-dom';

const Card = ({
  id, img, title, category, price, description, cart, updateCart, confirmSetAction,
}) => {
  const navigate = useNavigate();

  return (<div className="card" >
    <img src={img} alt="Image Error" />
    <h2>{title}</h2>
    <span className="category">{category}</span>
    <h3>{price}</h3>
   {!(cart).find((item) => item.id === id) ? <button
      className="card-btn"
      onClick={() => {
        cart.push({
          id,
          title,
          price,
          description,
          img_url: img,
          category,
        });
        updateCart(cart);
      }} >
      Add to Cart
    </button> : <button className="card-btn" onClick={() => {
      confirmSetAction(() => {
        updateCart(cart.filter((item) => item.id !== id));
      });
    }}>Delete</button>}
    <p onClick={() => navigate(
      '/details',
      {
        state: {
          img, title, category, price, description, id,
        },
      },
    )}>know more</p>
  </div>
  );
};
Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  cart: PropTypes.array.isRequired,
  updateCart: PropTypes.func.isRequired,
  confirmSetAction: PropTypes.func.isRequired,

};

export default Card;
