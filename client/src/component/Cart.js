import React from 'react';
import './cart.css';
import img from '../image/img.png';

const redirectToSingleProduct = (id) => {

};
function Cart() {
  const id = 4;
  return (
    <section className="landscape">

      <div className="card" onClick={() => redirectToSingleProduct(id)}>
        <img src={img} alt="Image Error" />
        <h2>T-Shirt</h2>
        <span className="category">Children</span>
        <h3>30$</h3>

      </div>
      <div className="card">
        <img src={img} alt="Image Error" />
        <h2>T-Shirt</h2>
        <span className="category">Children</span>
        <h3>30$</h3>
      </div>
      <div className="card">
        <img src={img} alt="Image Error" />
        <h2>T-Shirt</h2>
        <span className="category">Children</span>
        <h3>30$</h3>

      </div>
      <div className="card">
        <img src={img} alt="Image Error" />
        <h2>T-Shirt</h2>
        <span className="category">Children</span>
        <h3>30$</h3>

      </div>
      <div className="card">
        <img src={img} alt="Image Error" />
        <h2>T-Shirt</h2>
        <span className="category">Children</span>
        <h3>30$</h3>

      </div>
      <div className="card">
        <img src={img} alt="Image Error" />
        <h2>T-Shirt</h2>
        <span className="category">Children</span>
        <h3>30$</h3>

      </div>
      <div className="card">
        <img src={img} alt="Image Error" />
        <h2>T-Shirt</h2>
        <span className="category">Children</span>
        <h3>30$</h3>

      </div>

    </section>
  );
}

export default Cart;
