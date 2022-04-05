import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  const location = useLocation().pathname;
  return (
    <div>
      <nav>
      <Link to="/">
          <h1 className="logo">Cartify</h1>
        </Link>
        <div>
          <ul>
            <li>
              <Link to="/" className ={location === '/' ? 'nav_selected' : null}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/Myproduct" className ={location === '/Myproduct' ? 'nav_selected' : null}>My Products</Link>
            </li>
            <li>
              <Link to="/cart" className ={location === '/cart' ? 'nav_selected' : null}>Cart</Link>
            </li>
          </ul>
        </div>
        <Link to="/login" className="login_link">
          <button className="button">Log in</button>
        </Link>
      </nav>
    </div>
  );
}

export default NavBar;
