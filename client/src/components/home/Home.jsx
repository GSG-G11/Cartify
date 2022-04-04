import React from 'react';
import '../../stylesheet/Home.css';
import Cards from './Cards.jsx';

const items = [
  {
    id: 0, img: 'this image', title: 'this title', category: 'Children', price: 'this price',
  },
  {
    id: 1, img: 'this image 1', title: 'this title 1', category: 'Men', price: 'this price 1',
  },
  {
    id: 2, img: 'this image 2', title: 'this title 2', category: 'Women', price: 'this price 2',
  },
  {
    id: 3, img: 'this image 3', title: 'this title 3', category: 'Men', price: 'this price 3',
  },
  {
    id: 4, img: 'this image 4', title: 'this title 4', category: 'all', price: 'this price 4',
  },
  {
    id: 5, img: 'this image 5', title: 'this title 5', category: 'Women', price: 'this price 5',
  },
];

class Home extends React.Component {
  state = {
    category: '',
  };

  // eslint-disable-next-line class-methods-use-this
  filterCategory = (event) => {
    event.preventDefault();
    const category = event.target.getAttribute('value');
    this.setState({
      category,
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
                        <li><a href="" value = {''} className="nav_selected" onClick={this.filterCategory}>All</a></li>
                        <li><a href="" value = {'Men'} onClick={this.filterCategory}>Men</a></li>
                        <li><a href="" value = {'Women'} onClick={this.filterCategory}>Women</a></li>
                        <li><a href="" value = {'Children'} onClick={this.filterCategory}>Children</a></li>
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
                <Cards list={
                    this.state.category === '' ? items : items.filter((item) => item.category === this.state.category)
                } />
        </div>
    );
  }
}

export default Home;
