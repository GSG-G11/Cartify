import React from 'react';
import PropTypes from 'prop-types';

import Card from './Card.jsx';

const Cards = ({
  list, cart, updateCart, confirmSetAction,
}) => (
  <section className="landscape">
    {list.length === 0 ? <div>Not Found</div> : list.map(({
      id, title, img_url: imgUrl, category, price, description,
    }) => (
      <Card
        key={id}
        title={title}
        img={imgUrl}
        category={category}
        price={+price}
        id={+id}
        description={description}
        cart={cart}
        updateCart={updateCart}
        confirmSetAction={confirmSetAction}
      />
    ))}
  </section>
);

Cards.propTypes = {
  list: PropTypes.array,
  cart: PropTypes.array,
  updateCart: PropTypes.func,
  confirmSetAction: PropTypes.func,
};

export default Cards;
