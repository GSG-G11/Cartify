import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import NavBar from './component/NavBar';

function App() {
  return (
    <div >

<BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/login" element={<Login/>}></Route>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
