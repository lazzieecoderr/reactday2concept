import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Products from './Pages/Products';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Cart from './Pages/Cart';


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path = "/" element = {<Products />} />
        <Route path ='/cart' element = {<Cart />} />
      </Routes>
      <Footer />
      </BrowserRouter>
      
    </div>
  );
};

export default App;