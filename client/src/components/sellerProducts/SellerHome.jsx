import React from 'react';
import './SellerHome.css';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Cards from './Cards.jsx';

const items = [
  {
    id: 0,
    img: 'this image',
    title: 'Baby Pijamas for Men',
    category: 'Children',
    price: '5',
  },
  {
    id: 1,
    img: 'this image 1',
    title: 'this title 1',
    category: 'Men',
    price: '100',
  },
  {
    id: 2,
    img: 'this image 2',
    title: 'this title 2',
    category: 'Women',
    price: '20',
  },
  {
    id: 3,
    img: 'this image 3',
    title: 'this title 3',
    category: 'Men',
    price: '3',
  },
  {
    id: 4,
    img: 'image 4',
    title: 'Winter jacket for Men',
    category: 'Men',
    price: '4',
  },
  {
    id: 5,
    img: 'image 5',
    title: 'T shirt for men',
    category: 'Women',
    price: '10',
  },
];
class SellerHome extends React.Component {
  state = {
    categoryFilter: '',
    priceFilter: '',
    searchFilter: '',
  };

  handleCategoryChange = (e) => {
    e.preventDefault();
    const category = e.target.getAttribute('value');
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
    const { categoryFilter, searchFilter, priceFilter } = this.state;
    const filteredArray = items.filter(
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

  redirectToAdd = () => {
    const { navigate } = this.props;
    navigate('/addproduct');
  };

  render() {
    return (
      <div>
        <section className="header_section">
          <button className="button"onClick={this.redirectToAdd}>Add new Product</button>
          <div className="filter_items">
            <ul className="filter_category">
              <li>
                <a
                  href=""
                  className={
                    this.state.categoryFilter === '' ? 'nav_selected' : null
                  }
                  value={''}
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
              Filter by price:
            </label>
            <select name="price_filter" id="price_filter" onChange={this.handlePriceChange}>
              <option value="high">High to Low</option>
              <option value="low">Low to High</option>
            </select>

            <label htmlFor="search_filter" className="filter_label">
              Search item:
            </label>
            <input
              className="search"
              type="text"
              name=""
              id="search_filter"
              placeholder="Search item"
              onChange={this.handleSearchChange}
            />
          </div>
        </section>
        <Cards list={this.filterItems()} />

      </div>
    );
  }
}

const SellerHomeFun = (props) => {
  const navigate = useNavigate();
  return (
    <SellerHome {...props} navigate={navigate}/>

  );
};
SellerHome.propTypes = {
  navigate: PropTypes.func.isRequired,
};
export default SellerHomeFun;
