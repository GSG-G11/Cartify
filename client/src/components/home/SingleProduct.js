import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import addToCart from './home/addToCart';

function SingleProduct() {
  const {
    state: {
      img, title, category, price, details, id,
    },
  } = useLocation();
  return (
    <div>
      <section className="header">
        <img className="product_image" src={img} alt="Image Error" />
        <div className="product_info">
          <h1>{title}</h1>
          <h1>{price}</h1>
          <h1>{category}</h1>
          <br />
          <br />
          <button
            className="button"
            onClick={() => addToCart(img, title, category, price, details, id)}
          >
            addToCart
          </button>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <p>{details}</p>
        </div>
      </section>
    </div>
  );
}

SingleProduct.propTypes = {
  navigate: PropTypes.func.isRequired,
};
export default SingleProduct;
