import React, { useContext} from 'react';
import './Cart.css';
import { BsBag} from 'react-icons/bs';
import { AiOutlineClose} from 'react-icons/ai';
import productContext from "../Context/ProductsContext";


export default function Cart() {
  const contextData = useContext(productContext);
  return (
    <aside className={` ${contextData.isShowCart ? 'active' : ''} bag-sidebar`}> {/* add 'active' to show bag sidebar */}
        <h3 className='bag-title'>
            <span>
                <BsBag />
                Bag
            </span>
            <span>
                <AiOutlineClose className='close-icon' onClick={()=> contextData.setIsShowCart(false)} />
            </span>
        </h3>
        <div className='row bag-wrapper'>
            
            {contextData.userCart.map(product=>(
                <div className='col-12 mt-5' key={product.id}>
                <div className='card py-3 px-3'>
                    <div className='col-12 text-center'>
                        <img src="images/1.jpg" className='cart-img-top w-75' />
                    </div>
                    <div className='card-body d-flex flex-column justify-content-center align-items-center'>
                        <p className='card-text'>{product.title}</p>
                        <p className='price'>{product.price}$</p>
                        <br />
                        <a href="" className='btn btn-danger'>Buy</a>
                        <a href="#" className='btn btn-outline-dark mt-3 text-capitalize'>More Information</a>
                        <p className='number'>{product.count}</p>
                    </div>
                </div>
            </div>
            ))}

        </div>
    </aside>
  )
}
