import React from 'react';
import './cart.css';
import { useNavigate } from 'react-router-dom';
import img from '../image/img.png';

function Cart() {
  const navigate = useNavigate();
  const id = 4;
  return (
    <section className="landscape">

      <div className="card" onClick={() => navigate(`/product/${id}`)}>
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
