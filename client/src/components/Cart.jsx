import React from 'react';
import PropTypes from 'prop-types';
import Card from './Home/Card.jsx';

const Cart = ({
  isLoading, cart, updateCart, confirmSetAction,
}) => (isLoading ? <div>loading</div> : (
      <div>
         <button className="button" onClick={() => updateCart([])}>
            buy all
          </button>
        <section className="landscape-cart">

          {cart.map(({
            id, title, img, category, price, description,
          }) => (
            <Card
              key={id}
              title={title}
              img={img}
              category={category}
              price={+price}
              description={description}
              id={+id}
              cart={cart}
              updateCart={updateCart}
              confirmSetAction={confirmSetAction}
            />
          ))}
        </section>
      </div>
));
Cart.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  cart: PropTypes.array.isRequired,
  updateCart: PropTypes.func.isRequired,
  confirmSetAction: PropTypes.func,
};
export default Cart;
