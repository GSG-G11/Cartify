import React from 'react';
import PropTypes from 'prop-types';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

import axios from 'axios';

const Card = ({
  img, title, category, price, id, updateProducts, confirmSetAction, navigate,
}) => (
  <div className="card">
    <div className='icons'>

      <EditOutlined className='icon' onClick={() => navigate(`/addproduct/${id}`)} />
      <DeleteOutlined oonClick={() => confirmSetAction(
        () => {
          axios.delete(`/api/v1/product?id=${id}`)
            .catch(() => axios.delete(`http://localhost:3001/api/v1/product?id=${id}`))
            .then((res) => res.data)
            .then((products) => updateProducts(products));
        },
      )
      } className='icon' />
    </div>

    <img src={img} alt="Image Error" className='card_img' />
    <p>{title}</p>
    <p>{price} $</p>
    <span>{category}</span>
    <span className='goToDetails' >know more</span>

    </div>

);

Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  updateProducts: PropTypes.func.isRequired,
  confirmSetAction: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired,

};

export default Card;
