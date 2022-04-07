import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';

class AddProductClass extends React.Component {
  state = {
    title: '',
    imgUrl: '',
    price: '',
    category: 'Men',
    description: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    const {
      navigate, id, updateProducts, notificationSetMsg,
    } = this.props;
    e.preventDefault();
    if (id) {
      axios.patch('/api/v1/product', {
        id,
        ...this.state,
      })
        .catch(() => axios.patch('http://localhost:3001/api/v1/product', {
          id,
          ...this.state,
        }))
        .then((res) => res.data)
        .then((products) => updateProducts(products))
        .then(() => navigate('/product'))
        .then(() => notificationSetMsg('Product Edited Successfully'));
    } else {
      axios.post('/api/v1/product', this.state)
        .catch(() => axios.post('http://localhost:3001/api/v1/product', this.state))
        .then((res) => res.data)
        .then((products) => updateProducts(products))
        .then(() => navigate('/product'))
        .then(() => notificationSetMsg('New Product Added Successfully'));
    }
  };

  componentDidMount() {
    const { id, products } = this.props;

    if (id) {
      const {
        title,
        img_url: imgUrl,
        price,
        category,
        description,
      } = products.find((item) => item.id === id);
      this.setState({
        title,
        imgUrl,
        price,
        category,
        description,
      });
    }
  }

  render() {
    const { id } = this.props;
    const {
      title,
      imgUrl,
      price,
      category,
      description,
    } = this.state;
    return (
        <div className='addContainer'>
       <form className="add-form" onSubmit={
         this.handleSubmit
       }>
        <h2 className='add-title'>{id ? 'Edit' : 'Add'} Product</h2>
        <input className="input" type="text" id="title" placeholder="Product Title" onChange={this.handleChange} value={title} />
        <input className="input" type="text" id="imgUrl" placeholder="Product Img Url" onChange={this.handleChange} value={imgUrl} />
        <input className="input" type="number" step="any" id="price" placeholder="Product Price" onChange={this.handleChange} value={price} />
        <select name="category" id="category"onChange={this.handleChange} className="select" value={category} >
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="children">Children</option>
        </select>
        <textarea className='textarea' name="description" rows="8" cols="48" placeholder="Product description" id="description" onChange={this.handleChange} value={description} ></textarea>
        <input className="button-from-add" type="submit" id="add" value={id ? 'Update' : 'Add'} />

    </form>
        </div>

    );
  }
}

const AddProduct = (props) => {
  const navigate = useNavigate();
  const { id } = useParams();
  return <AddProductClass {...props} navigate={navigate} id={+id} />;
};
AddProductClass.propTypes = {
  updateProducts: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  products: PropTypes.array,
  notificationSetMsg: PropTypes.func.isRequired,
};
export default AddProduct;
