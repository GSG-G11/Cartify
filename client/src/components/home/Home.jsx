import React from 'react';
import '../../stylesheet/Home.css';
import Cards from './Cards.jsx';

const items = [
  {
    id: 0, img: 'this image', title: 'this title', category: 'Children', price: '5',
  },
  {
    id: 1, img: 'this image 1', title: 'this title 1', category: 'Men', price: '100',
  },
  {
    id: 2, img: 'this image 2', title: 'this title 2', category: 'Women', price: '20',
  },
  {
    id: 3, img: 'this image 3', title: 'this title 3', category: 'Men', price: '3',
  },
  {
    id: 4, img: 'this image 4', title: 'this title 4', category: 'Men', price: '4',
  },
  {
    id: 5, img: 'this image 5', title: 'this title 5', category: 'Women', price: '10',
  },
];

class Home extends React.Component {
  state = {
    categoryFilter: '',
    priceFilter: '',
  };

  // eslint-disable-next-line class-methods-use-this
  handleCategoryChange = (event) => {
    event.preventDefault();
    const category = event.target.getAttribute('value');
    this.setState({
      categoryFilter: category,
    });
  };

  handlePriceChange = (event) => {
    event.preventDefault();
    const price = event.target.value;
    this.setState({
      priceFilter: price,
    });
  };

  // eslint-disable-next-line class-methods-use-this
  render() {
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
                        <li><a href="" value = {''} className="nav_selected" onClick={this.handleCategoryChange}>All</a></li>
                        <li><a href="" value = {'Men'} onClick={this.handleCategoryChange}>Men</a></li>
                        <li><a href="" value = {'Women'} onClick={this.handleCategoryChange}>Women</a></li>
                        <li><a href="" value = {'Children'} onClick={this.handleCategoryChange}>Children</a></li>
                    </ul>
                    <label htmlFor="price_filter" className="filter_label">Filter by price:</label>
                    <select selected={this.state.price} name="price_filter" id="price_filter" onChange={this.handlePriceChange}>
                        <option value="high">High to Low</option>
                        <option value="low">Low to High</option>
                    </select>

                    <label htmlFor="search_filter" className="filter_label">Search item:</label>
                    <input className="search" type="text" name="" id="search_filter" placeholder="Search item" />
                </div>
            </section>
                <Cards list={
                   this.state.priceFilter === 'low' ? items.sort((a, b) => parseFloat(a.price) - parseFloat(b.price)) : items.sort((b, a) => parseFloat(a.price) - parseFloat(b.price))
                } />
        </div>
    );
  }
}

export default Home;
