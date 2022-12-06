
import './App.css';
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Cart from './components/Cart';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/NavBar';
import CartProvider from './Context/CartContext';
import FormFinish from './components/FormFin';
import FinCompra from './components/FinCompra'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import DarkTheme from './components/darkTheme';
function App() {
  
  return (
    <>
    <BrowserRouter>
        <CartProvider>
          <Navbar/>
          <DarkTheme/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
            <Route path='/form' element={<FormFinish/>}/>
            <Route path='/finCompra' element={<FinCompra/>}/>
          </Routes>
        </CartProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
