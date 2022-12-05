
import './App.css';
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Cart from './components/Cart';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/NavBar';
import CartProvider from './Context/CartContext';
import FinCompra from './components/FinCompra';
 
function App() {
  return (
    <>
    <BrowserRouter>
        <CartProvider>
          <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
            <Route path='/fin' element={<FinCompra/>}/>
          </Routes>
        </CartProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
