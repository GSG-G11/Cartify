import React from 'react';
import PropTypes from 'prop-types';
import '../../stylesheet/Home.css';

const Cards = ({ list }) => (
 <section className="landscape">
    {
    list.map((item) => (
            <div key={item.id} className="card">
                <img src={item.img} alt="Image Error" />
                <h2>{item.title}</h2>
                <span className="category">{item.category}</span>
                <h3>{item.price}</h3>
                <button className="button" onClick={(e) => { e.preventDefault(); console.log('Hello From card'); }}>Add to Cart</button>
        </div>))
     }

</section>
);

Cards.propTypes = {
  list: PropTypes.array,
};

export default Cards;
