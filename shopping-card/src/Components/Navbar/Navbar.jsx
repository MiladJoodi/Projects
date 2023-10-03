import React from 'react'
import { BsBag} from 'react-icons/bs'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='navbar navbar-expand-sm py-3 d-flex'>
        <div className="container">
            <a href="#" className="navbar-brand">
                Sabzlearn Shop
            </a>

            <ul className="navbar-nav me-auto ms-3">
                <li className='nav-item'>
                    <a href="" className='nav-link'>
                        Home
                    </a>
                </li>
            </ul>
            <div className='bag-box'>
                <a href="" className='bag'>
                    <BsBag className='text-white' />
                    <span className='bag-products-counter'>0</span>
                </a>
            </div>
        </div>
    </div>
  )
}
