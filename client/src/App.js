import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './component/Cart';
import Home from './component/home/Home.jsx';
import LoginFunc from './component/Login';
import MyProduct from './component/MyProduct';
import NavBar from './component/NavBar';
import AddProduct from './components/AddProduct.jsx';
import SellerHomeFun from './components/sellerProducts/SellerHome.jsx';
import SingleProduct from './component/SingleProduct';
import NotFound from './component/NotFound.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>

          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/login" element={<LoginFunc />}></Route>
          <Route path="/product" element={<MyProduct />}></Route>
          <Route path="/seller" element={<SellerHomeFun />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/addproduct" element={<AddProduct />}></Route>
          <Route path="/details" element={<SingleProduct />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
