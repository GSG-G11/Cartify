import React from 'react';
import { useLocation } from 'react-router-dom';
import addToCart from './Home/addToCart';

function SingleProduct() {
  const {
    state: {
      img, title, category, price, description, id,
    },
  } = useLocation();
  return (
    <div className='productBody'>
      <section className="single-product-section">
        <img className="product_image" src={img} alt="Image Error" />
        <div className="product_info">
          <h3 className='text'>{title}</h3>
          <p className='text'>{price} $</p>
          <p className='text'>{category}</p>
          <p className='details'>{description}</p>
          <button
            className="btn-single-product"
            onClick={() => addToCart(img, title, category, price, description, id)}
          >
            addToCart
          </button>
        </div>
      </section>
    </div>
  );
}

export default SingleProduct;
