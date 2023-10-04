import React, { useContext} from 'react'
import { BsBag} from 'react-icons/bs'
import './Navbar.css'
import productContext from "./../../Context/ProductsContext";


export default function Navbar() {
  const contextData = useContext(productContext);

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
                <a href="javascript:void(0)" className='bag'>
                    <BsBag className='text-white' onClick={()=> contextData.setIsShowCart(true)} />
                    <span className='bag-products-counter'>{contextData.userCart.length}</span>
                </a>
            </div>
        </div>
    </div>
  )
}
