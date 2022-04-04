import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Cart from './component/Cart';
import Home from './component/Home';
import Login from './component/Login';
import MyProduct from './component/MyProduct';
import NavBar from './component/NavBar';
import SingleProduct from './component/SingleProduct';

function App() {
  return (
    <div >

      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path='/Myproduct' element={<MyProduct/>}></Route>
          <Route path='/product' element={<SingleProduct/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
