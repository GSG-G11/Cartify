import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import SellerHomeFun from './components/sellerProducts/SellerHome.jsx';
import Home from './components/Home/Home.jsx';
import SingleProduct from './components/SingleProduct.jsx';
import NotFound from './components/NotFound.jsx';
import Cart from './components/Cart.jsx';
import LoginFunc from './components/Login.jsx';
import NavBar from './components/NavBar';
import { AddProduct, Confirm, Notification } from './components';

class App extends Component {
  state = {
    products: [],
    cart: [],
    isLoading: true,
    confirm: {
      isOpen: false,
      msg: '',

      action() { return true; },
    },
    notification: {
      isOpen: false,
      msg: 'success',
    },
  };

  notificationClose = () => {
    this.setState({ notification: { isOpen: false } });
  };

  confirmToggle = () => {
    this.setState({ confirm: { isOpen: !this.state.confirm.isOpen } });
  };

  confirmSetAction = (action) => {
    this.setState({ confirm: { action, isOpen: true } });
  };

  updateCart = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
    this.setState({ cart });
  };

  updateProducts = (products) => {
    this.setState({ products });
  };

  componentDidMount = () => {
    const { isLoading } = this.state;
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (isLoading) {
      axios.get('/api/v1/product')
        .catch(() => axios.get('http://localhost:3001/api/v1/product'))
        .then((res) => res.data)
        .then((products) => this.setState({ products, isLoading: false, cart }));
    }
  };

  render() {
    const {
      products, isLoading, confirm, notification, cart,
    } = this.state;
    return (
    <div>
      <BrowserRouter>
      <NavBar></NavBar>
        <Routes>
          <Route path="/cart" element={<Cart
          isLoading={isLoading}
          cart={cart}
          updateCart={this.updateCart}
          confirmSetAction={this.confirmSetAction}
          />}></Route>
          <Route path="/login" element={<LoginFunc />}></Route>
          <Route path="/product" element={
          <SellerHomeFun
          isLoading={isLoading}
          products={products}
          updateProducts={this.updateProducts}
          />}></Route>
          <Route path="/" element={

          <Home
          isLoading={isLoading}
          cart={cart}
          updateCart={this.updateCart}
          confirmSetAction={this.confirmSetAction}
           products={products} />}></Route>
          <Route path="/addproduct" element={
          <AddProduct
          updateProducts={this.updateProducts}
          />}></Route>
          <Route path="/details" element={<SingleProduct />}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>
      <Notification isOpen={notification.isOpen}
        msg={notification.msg}
        off={this.notificationClose}
        duration={1}
        />
      <Confirm isOpen={confirm.isOpen}
       action={this.state.confirm.action}
        msg={'Are you sure?'}
        toggle={this.confirmToggle} />
    </div>
    );
  }
}

export default App;
