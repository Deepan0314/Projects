import React from 'react'
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart';

import Headers from './Components/Headers';
import Footer from './Components/Footer';
import Error from './pages/Error';
import Checkout from './pages/Checkout';

const App = () => {
  return (
    <BrowserRouter>
    <Headers/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route  path="/menu" element={<Menu/>}/>
        <Route  path="/cart" element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='*' element={<Error/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App