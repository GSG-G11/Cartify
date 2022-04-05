import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
        <div>
            <nav>
                <h1 className="logo">Cartify</h1>
                <div>
                    <ul>
                        <li ><Link to="/" className="nav_selected">Home</Link></li>
                        <li ><Link to="/Myproduct">My Products</Link></li>
                        <li ><Link to="/cart">Cart</Link></li>
                    </ul>
                </div>
                <button className="button"><Link to="/login" className='Link'>Log in</Link></button>
            </nav>
        </div>
  );
}

export default NavBar;
