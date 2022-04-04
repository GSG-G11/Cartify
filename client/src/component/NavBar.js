import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
        <div>
                <nav>
        <h1 className="logo">Cartify</h1>
        <div>
            <ul>
                <li ><a href="" className="nav_selected">Home</a></li>
                <li ><a href="">Products</a></li>
                <li ><a href="">Cart</a></li>
            </ul>
        </div>
        <button className="button">Login</button>
    </nav>
        </div>
  );
}

export default NavBar;
