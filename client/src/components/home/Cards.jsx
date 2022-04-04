import React from 'react';
import PropTypes from 'prop-types';
import '../../stylesheet/Home.css';

const Cards = ({ list }) => (
 <section className="landscape">
     {
    list.map((item) => (
            <div key={1} className="card">
                <img src={item.img} alt="Image Error" />
                <h2>{item.title}</h2>
                <span className="category">{item.category}</span>
                <h3>{item.price}</h3>
                <button className="button" onClick={console.log('Add to cart')}>Add to Cart</button>
            </div>))
     }

</section>
);

Cards.propTypes = {
  list: PropTypes.array,
};

export default Cards;
