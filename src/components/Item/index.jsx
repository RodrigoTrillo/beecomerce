import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'



const Item = ({info}) => {

  
  return (
    <div className='card'>
        <img className='card-image' src={info.image} alt={info.title} />
        
        <div className='card-content'>
            <h3 className='card-name'>{info.title}</h3>
            <p className='card-tipo'>{info.category}</p>
        </div>
        <div className='card-footer'>
            <p className='card-price'>${info.price}</p>
            <div className="card-cart">
                
            </div>
            <div className='card-stock'><p>stock= {info.stock}</p></div>
        </div>
        <Link to={`/detalle/${info.id}`} className='card-container'>
        <button className='icon-btn add-btn'>
                    <div className='add-icon'></div>
                    <div className='btn-txt'>Add To Cart</div>
                </button>
        </Link>
    </div>
  )
}


export default Item