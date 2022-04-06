import React from 'react';
import PropTypes from 'prop-types';
import Cards from './Cards.jsx';

const header = require('../../image/header.png');

class Home extends React.Component {
  state = {
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
    const { products } = this.props;
    const { categoryFilter, searchFilter, priceFilter } = this.state;
    const filteredArray = products.filter(
      (item) => (categoryFilter === '' || categoryFilter === item.category)
        && item.title.toLowerCase().includes(searchFilter.toLowerCase()),
    );
    if (priceFilter === 'low') {
      return filteredArray.sort(
        (a, b) => parseFloat(a.price) - parseFloat(b.price),
      );
    }
    if (priceFilter === 'high') {
      return filteredArray.sort(
        (b, a) => parseFloat(a.price) - parseFloat(b.price),
      );
    }
    return filteredArray;
  };

  render() {
    const { cart, updateCart, confirmSetAction } = this.props;
    return (
      <div>
        <div>
      <img className='img-header' src={header}/>
      <div className='centered'>
      <h5>Cartify</h5>

      </div>

        </div>
        <section className="header_section-home">
          <h1 className="header_title-home">Our Products</h1>
          <div className="filter_items">
            <ul className="filter_category">
              <li>
                <a
                  href=""
                  value={''}
                  className={
                    this.state.categoryFilter === '' ? 'nav_selected' : null
                  }
                  onClick={this.handleCategoryChange}
                >
                  All
                </a>
              </li>
              <li>
                <a
                  href=""
                  className={
                    this.state.categoryFilter === 'Men' ? 'nav_selected' : null
                  }
                  value={'Men'}
                  onClick={this.handleCategoryChange}
                >
                  Men
                </a>
              </li>
              <li>
                <a
                  href=""
                  className={
                    this.state.categoryFilter === 'Women'
                      ? 'nav_selected'
                      : null
                  }
                  value={'Women'}
                  onClick={this.handleCategoryChange}
                >
                  Women
                </a>
              </li>
              <li>
                <a
                  href=""
                  className={
                    this.state.categoryFilter === 'Children'
                      ? 'nav_selected'
                      : null
                  }
                  value={'Children'}
                  onClick={this.handleCategoryChange}
                >
                  Children
                </a>
              </li>
            </ul>
            <label htmlFor="price_filter" className="filter_label">
              sort price by :
            </label>
            <select

              selected={this.state.price}
              name="price_filter"
              id="price_filter"
              onChange={this.handlePriceChange}
              className="selectPrice"

            >
              <option value="">$$$</option>
              <option value="high">High to Low</option>
              <option value="low">Low to High</option>
            </select>

            <input

              className="search"
              type="text"
              name=""
              id="search_filter"
              placeholder="Search item"
              onChange={this.handleSearchChange}
            />
              <button className="search-btn"type="submit"><i className="fa fa-search"></i></button>
          </div>
        </section>
        <Cards
        cart={cart}
        updateCart={updateCart}
        confirmSetAction={confirmSetAction}
        list={this.filterItems()}
        search={this.state.searchFilter} />
      </div>
    );
  }
}

Home.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    description: PropTypes.string,
    category: PropTypes.string.isRequired,
    img_url: PropTypes.string.isRequired,
  })),
  cart: PropTypes.array.isRequired,
  updateCart: PropTypes.func.isRequired,
  confirmSetAction: PropTypes.func.isRequired,
};

export default Home;
