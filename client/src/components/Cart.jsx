import React from 'react';
import PropTypes from 'prop-types';
import Card from './Home/Card.jsx';

const Cart = ({
  isLoading, cart, updateCart, confirmSetAction, notificationSetMsg,
}) => (isLoading ? <div>loading</div> : (
      <div>

        <section className="landscape-cart">

          {cart.map(({
            id, title, img_url: imgUrl, category, price, description,
          }) => (
            <Card
              key={id}
              title={title}
              img={imgUrl}
              category={category}
              price={+price}
              description={description}
              id={+id}
              cart={cart}
              updateCart={updateCart}
              confirmSetAction={confirmSetAction}
              notificationSetMsg={notificationSetMsg}
            />
          ))}

        </section>
        <div className='buy-btn-div'>
        <button className="buy-btn" onClick={() => updateCart([])}>
            Buy All
          </button>
        </div>

      </div>
));
Cart.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  cart: PropTypes.array.isRequired,
  updateCart: PropTypes.func.isRequired,
  confirmSetAction: PropTypes.func,
  notificationSetMsg: PropTypes.func.isRequired,
};
export default Cart;
