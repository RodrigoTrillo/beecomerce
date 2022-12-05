import React from 'react'
import CartWidget from '../CartWidget'
import { NavLink } from 'react-router-dom'
import './styles.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <ul className='navbar-ul'>
            <li className='logo'>
              <NavLink to='/' className='nav-link'>
                <i className="fa-brands fa-forumbee"></i>
                <span className='nav-text-logo'>BeeShop</span>
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/' className='nav-link'>
                <i className="fa-solid fa-house-chimney"></i>
                <span className='nav-text'>Home</span>
              </NavLink>

            </li>
            <li className='nav-item'>
              <NavLink to='/categoria/auris' className='nav-link'>
                <i className="fa-solid fa-headphones-simple"></i>
                <span className='nav-text'>Auriculares</span>
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/categoria/mouse' className='nav-link'>
                <i className="fa-solid fa-computer-mouse"></i>
                <span className='nav-text'>Mouses</span>
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/categoria/teclado' className='nav-link'>
                <i className="fa-solid fa-keyboard"></i>
                <span className='nav-text'>Teclados</span>
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/cart' className='nav-link'>
                <CartWidget/>
                <span className='nav-text'>Productos</span>
              </NavLink>
            </li>
            
        </ul>
    </div>
  )
}

export default Navbar