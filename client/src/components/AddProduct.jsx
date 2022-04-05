import React from 'react';
import axios from 'axios';

class AddProduct extends React.Component {
  state = {
    title: ' ',
    imgUrl: ' ',
    price: '',
    Category: '',
    Description: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/v1/product', this.state)
      .catch(() => axios.post('http://localhost:3001/api/v1/product'), this.state);
  };

  render() {
    return (
        <div className='body'>
       <form className="add-form" onSubmit={this.handleSubmit}>
        <h2 className='add-title'>Add Product</h2>
        <input className="input" type="text" id="title" placeholder="Product Title" onChange={this.handleChange}/>
        <input className="input" type="text" id="imgUrl" placeholder="Product Img Url" onChange={this.handleChange}/>
        <input className="input" type="number" id="price" placeholder="Product Price" onChange={this.handleChange}/>
        <select name="category" id="Category"onChange={this.handleChange} className="select">
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="children">Children</option>
        </select>
        <textarea className='textarea' name="description" rows="8" cols="48" placeholder="Product description" id="Description" onChange={this.handleChange}></textarea>
        <input className="button-from-add" type="submit" id="add" value="Add" />

    </form>
        </div>

    );
  }
}

export default AddProduct;
