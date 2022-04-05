import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddProduct from './components/AddProduct.jsx';
import SellerHomeFun from './components/sellerProducts/SellerHome.jsx';
import Home from './components/Home/Home.jsx';
import SingleProduct from './components/SingleProduct.jsx';
import NotFound from './components/NotFound.jsx';
import Cart from './components/Cart.jsx';
import LoginFunc from './components/Login.jsx';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar></NavBar>

        <Routes>

          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/login" element={<LoginFunc />}></Route>
          <Route path="/product" element={<SellerHomeFun/>}></Route>
          <Route path="/seller" element={<SellerHomeFun />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/addproduct" element={<AddProduct />}></Route>
          <Route path="/details" element={<SingleProduct />}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
