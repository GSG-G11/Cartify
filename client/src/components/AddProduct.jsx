import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

class AddProduct extends React.Component {
  state = {
    title: ' ',
    imgUrl: ' ',
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
    e.preventDefault();
    const { updateProducts } = this.props;
    axios.post('/api/v1/product', this.state)
      .catch(() => axios.post('http://localhost:3001/api/v1/product', this.state))
      .then((res) => res.data)
      .then((products) => updateProducts(products));
  };

  render() {
    return (
        <div className='addContainer'>
       <form className="add-form" onSubmit={this.handleSubmit}>
        <h2 className='add-title'>Add Product</h2>
        <input className="input" type="text" id="title" placeholder="Product Title" onChange={this.handleChange}/>
        <input className="input" type="text" id="imgUrl" placeholder="Product Img Url" onChange={this.handleChange}/>
        <input className="input" type="number" step="any" id="price" placeholder="Product Price" onChange={this.handleChange}/>
        <select name="category" id="category"onChange={this.handleChange} className="select">
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="children">Children</option>
        </select>
        <textarea className='textarea' name="description" rows="8" cols="48" placeholder="Product description" id="description" onChange={this.handleChange}></textarea>
        <input className="button-from-add" type="submit" id="add" value="Add" />

    </form>
        </div>

    );
  }
}
AddProduct.propTypes = {
  updateProducts: PropTypes.func.isRequired,
};
export default AddProduct;
