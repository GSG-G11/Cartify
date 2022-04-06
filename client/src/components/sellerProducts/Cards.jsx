import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card.jsx';

const Cards = ({
  list, updateProducts, confirmSetAction, navigate,
}) => (
  <section className="landscape">
    {
      list.map(({
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
        updateProducts={updateProducts}
        confirmSetAction={confirmSetAction}
        navigate={navigate}
        />
      ))
    }

  </section>
);

Cards.propTypes = {
  list: PropTypes.array,
  updateProducts: PropTypes.func.isRequired,
  confirmSetAction: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default Cards;
