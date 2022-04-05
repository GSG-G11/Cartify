import React from 'react';
import Cards from './Cards.jsx';

const items = [
  {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    details: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: "men's clothing",
    img: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',

  },
  {
    id: 2,
    title: 'Mens Casual Premium Slim Fit T-Shirts ',
    price: 22.3,
    details: 'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
    category: "men's clothing",
    img: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',

  },
  {
    id: 3,
    title: 'Mens Cotton Jacket',
    price: 55.99,
    details: 'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
    category: "men's clothing",
    img: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
  },
  {
    id: 4,
    title: 'Mens Casual Slim Fit',
    price: 15.99,
    details: 'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.',
    category: "men's clothing",
    img: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',

  },
];

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

  render() {
    return (
      <div>
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
              Filter by price:
            </label>
            <select
              selected={this.state.price}
              name="price_filter"
              id="price_filter"
              onChange={this.handlePriceChange}
            >
              <option value="">$$$</option>
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

export default Home;
