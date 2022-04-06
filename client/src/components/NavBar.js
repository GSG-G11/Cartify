import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/style.css';

function NavBar() {
  const location = useLocation().pathname;
  return (
    <div>
      <nav className='Header'>
      <Link to="/">
          <h1 className="logo">Cartify</h1>
        </Link>
        <div>
          <ul>
            <li>
              <Link to="/" className ={location === '/' ? 'selected' : null}>
              Home
              </Link>
            </li>
            <li>
              <Link to="/product" className ={location === '/product' ? 'selected' : null}>Products</Link>
            </li>
            <li>
              <Link to="/cart" className ={location === '/cart' ? 'selected' : null}>Cart</Link>
            </li>
          </ul>
        </div>
        <Link to="/login" className="login_link">
          <button className="login-btn">LOG IN</button>
        </Link>
      </nav>
    </div>
  );
}

export default NavBar;
