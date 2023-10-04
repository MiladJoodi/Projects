import React from 'react'
import './Cart.css'

export default function Cart() {
  return (
    <div className='cart'>
      <div className='cartWrapper'>
        <h3>سبد خرید</h3>
        <hr />
        <div className='cartProductContainer'>
          <div className='cartImgTop'>
            <img src="./images/1.jpg" className='cartProductImg w-50' />
          </div>
          <div className='cartProductDetails'>
            <span className='cartProductTitle'>گوشی سامسونگ A51</span>
            <span className='cartProductPrice'>12,000,000 تومان</span>
          </div>
        </div>
      </div>
    </div>
  )
}
