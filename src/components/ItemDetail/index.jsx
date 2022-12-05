import './styles.css'
import React,{useState} from 'react'
import ItemCount from '../ItemCount'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';

const ItemDetail = ({data}) => {
  const [goToCart, setGoToCart]= useState(false);
  const {addProduct}= useCartContext();


  const onAdd=(quantity)=>{
    setGoToCart(true);
    addProduct(data, quantity);
  }
  return (
    <div className='container'>
        <div className="detail">
            <img className='detail-image' src={data.image} alt={data.title} />
            <div className="content">
                <h1>{data.title}</h1>
                <p>{data.description}</p>
                {
                  goToCart
                  ? <Link to='/cart'>Terminar Compra</Link>
                  :<ItemCount initial={1} stock={8} onAdd={onAdd} />
                }
                
            </div>
        </div>
    </div>
  )
}

export default ItemDetail