import React from 'react';
import '../../stylesheet/Home.css';
import Cards from './Cards.jsx';

function Home() {
  const items = [
    {
      id: 0, img: 'this image', title: 'this title', category: 'this category', price: 'this price',
    },
    {
      id: 1, img: 'this image 1', title: 'this title 1', category: 'this category 1', price: 'this price 1',
    },
    {
      id: 2, img: 'this image 2', title: 'this title 2', category: 'this category 2', price: 'this price 2',
    },
  ];

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
    <section className="header_section">
        <h1 className="header_title">Our Products</h1>
        <div className="filter_items">
            <ul className="filter_category">
                <li><a href="" className="nav_selected">All</a></li>
                <li><a href="">Men</a></li>
                <li><a href="">Women</a></li>
                <li><a href="">Children</a></li>
            </ul>
            <label htmlFor="price_filter" className="filter_label">Filter by price:</label>
            <select name="price_filter" id="price_filter">
                <option value="high">High to Low</option>
                <option value="low">Low to High</option>
            </select>

            <label htmlFor="search_filter" className="filter_label">Search item:</label>
            <input className="search" type="text" name="" id="search_filter" placeholder="Search item" />
        </div>
    </section>
        <Cards list={items} />
    </div>
  );
}

export default Home;
