import React from 'react'
import './styles.css'
import {Link} from 'react-router-dom'
import { useCartContext } from '../../Context/CartContext'
import ItemCart from '../ItemCart';
import {addDoc, getFirestore, collection} from 'firebase/firestore'

const Cart = () => {
  const {cart, totalPrice,clearCart,setCart}= useCartContext();

  const order = {
    buyer:{
      name: 'Rodrigo',
      email: 'rollyt1232@gmail.com',
      phone:'12341234',
      address:'calle asd'
    },
    items: cart.map(product=>({id:product.id, title: product.title, price: product.price, quantity:product.quantity})) ,
    total:totalPrice() ,
  }

  const handleClick=()=>{
    const vaciarCarrito=clearCart()
    const db= getFirestore();
    const ordersCollection = collection(db, 'orders');
    addDoc(ordersCollection, order)
    .then(({id})=> console.log(id))
    setCart(vaciarCarrito)
    
    
  }
  
  return (
    <>
    <div className='cart-container'>
    {
      cart.map(product => <ItemCart key={product.id} product={product}/>)
    }
    
    </div>
    <div className="contButt">
    <p className='total'>
      Total: $ {totalPrice()}
    </p>
    <Link to='/' className='seguirComprando'>Seguir Comprando</Link>
    <Link to='/form' onClick={handleClick} className='emitirCompra'>Emitir Compra</Link>
    </div>
    </>
    
  )
}

export default Cart