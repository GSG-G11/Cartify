import React, { Component } from 'react';
import './cart.css';
import Card from './home/Card.jsx';

class Cart extends Component {
  state = {
    carts: [],
  };

  componentDidMount() {
    const carts = JSON.parse(localStorage.getItem('carts')) || [];
    this.setState({
      carts,
    });
  }

  DeleteItem = (id) => {
    const { carts } = this.state;
    const newCarts = carts.filter((item) => item.id !== id);
    localStorage.setItem('carts', JSON.stringify(newCarts));
    this.setState({
      carts: newCarts,
    });
  };

  removeAll = () => {
    localStorage.removeItem('carts');
    this.setState({
      carts: [],
    });
  };

  render() {
    const { carts } = this.state;

    return (

      <div>
        <section className="landscape">
          <button className="button" onClick={this.removeAll}>
            buy all
          </button>
          {carts.map(({
            id, title, img, category, price, details,
          }) => (
            <Card
              key={id}
              title={title}
              img={img}
              category={category}
              price={+price}
              details={details}
              id={+id}
              forCarts={true}
              DeleteItem={this.DeleteItem}
            />
          ))}
        </section>
      </div>
    );
  }
}

export default Cart;
