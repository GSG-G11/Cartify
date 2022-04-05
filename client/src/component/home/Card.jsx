import React from 'react';
import PropTypes from 'prop-types';
import '../../stylesheet/Home.css';
import { useNavigate } from 'react-router-dom';
import addToCart from './addToCart';

const Card = ({
  id, img, title, category, price, forCarts, DeleteItem, details,
}) => {
  const navigate = useNavigate();

  return (<div className="card" >
    <img src={img} alt="Image Error" />
    <h2>{title}</h2>
    <span className="category">{category}</span>
    <h3>{price}</h3>
   {!forCarts ? <button
      className="button"
      onClick={() => addToCart(img, title, category, price, details, id)} >
      Add to Cart
    </button> : <button className="button" onClick={() => DeleteItem(id)}>Delete</button>}
    <p onClick={() => navigate(
      '/details',
      {
        state: {
          img, title, category, price, details, id,
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
  forCarts: PropTypes.bool.isRequired,
  DeleteItem: PropTypes.func.isRequired,
  details: PropTypes.string.isRequired,

};

export default Card;
