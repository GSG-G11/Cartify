import React from 'react';
import '../../stylesheet/Home.css';
import Cards from './Cards.jsx';

const items = [
  {
    id: 0, img: 'this image', title: 'Baby Pijamas for Men', category: 'Children', price: '5',
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
    id: 4, img: 'image 4', title: 'Winter jacket for Men', category: 'Men', price: '4',
  },
  {
    id: 5, img: 'image 5', title: 'T shirt for men', category: 'Women', price: '10',
  },
];

class Home extends React.Component {
  state = {
    filteredData: [],
    categoryFilter: '',
    priceFilter: '',
    searchFilter: '',
  };

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

  handleSearchChange = (event) => {
    event.preventDefault();
    const input = event.target.value;
    this.setState({
      searchFilter: input,
    });
  };

  filterItems = () => {
    // Category Filtering
    const { categoryFilter, priceFilter, searchFilter } = this.state;
    if (categoryFilter === '') {
      return items;
    }
    if (categoryFilter) {
      return items.filter((item) => item.category === categoryFilter);
    }
    // Price Filtering
    if (priceFilter === 'low') {
      return items.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } if (priceFilter === 'high') {
      return items.sort((b, a) => parseFloat(a.price) - parseFloat(b.price));
    }
    // Search Filtering
    if (searchFilter === '') {
      return items;
    } if (searchFilter) {
      return items.filter((item) => item.title.toLowerCase().includes(searchFilter.toLowerCase()));
    }
    return items;
  };

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
                    <input className="search" type="text" name="" id="search_filter" placeholder="Search item" onChange={this.handleSearchChange}/>
                </div>
            </section>
               <Cards list={this.filterItems()} />
        </div>
    );
  }
}

export default Home;
