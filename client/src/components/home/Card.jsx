import React from 'react';
import PropTypes from 'prop-types';
import '../../stylesheet/Home.css';

const Card = ({
  id, title, img, category, price,
}) => (
            <div className="card">
                <img src={img} alt="Image Error" />
                <h2>{title}</h2>
                <span className="category">{category}</span>
                <h3>{price}</h3>
                <button className="button" onClick={(e) => { e.preventDefault(); console.log(id); }}>Add to Cart</button>
        </div>
);

Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Card;
