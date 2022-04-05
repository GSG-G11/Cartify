import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './component/Cart';
import Home from './component/home/Home.jsx';
import LoginFunc from './component/Login';
import MyProduct from './component/MyProduct';
import NavBar from './component/NavBar';
import SingleProduct from './component/SingleProduct';
import NotFound from './component/NotFound.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/login" element={<LoginFunc />}></Route>
          <Route path="/Myproduct" element={<MyProduct />}></Route>
          <Route path="/details" element={<SingleProduct />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
