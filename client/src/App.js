import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Cart from './component/Cart';
import Home from './component/Home';
import LoginFunc from './component/Login';
import MyProduct from './component/MyProduct';
import NavBar from './component/NavBar';
import SingleProduct from './component/SingleProduct';

function App() {
  return (
    <div >

      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/login" element={<LoginFunc/>}></Route>
          <Route path='/product' element={<MyProduct/>}></Route>
          <Route path='/product/:productId' element={<SingleProduct/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
