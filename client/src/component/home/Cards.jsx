import React from 'react';
import PropTypes from 'prop-types';
import '../../stylesheet/Home.css';
import Card from './Card.jsx';

const Cards = ({ list }) => (
  <section className="landscape">
    {list.map(({
      id, title, img, category, price, details,
    }) => (
      <Card
        key={id}
        title={title}
        img={img}
        category={category}
        price={+price}
        id={+id}
        details={details}
      />
    ))}
  </section>
);

Cards.propTypes = {
  list: PropTypes.array,
};

export default Cards;
