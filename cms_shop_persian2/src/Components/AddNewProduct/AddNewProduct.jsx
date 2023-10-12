import React from 'react'
import './AddNewProduct.css'

export default function AddNewProduct() {
  return (
    <div className='add-product'>
        <h1 className='add-product-title'>افزودن محصول جدید</h1>
        {/* add product form */}
        <form action="#" className='add-product-form'>
           <div className='add-product-form-wrapper'>
             {/* item */}
             <div className='add-product-form-group'>
                <input type="text" placeholder='نام محصول را وارد کنید' className='add-product-input' />
            </div>
            {/* item */}
            <div className='add-product-form-group'>
                <input type="text" placeholder='قیمت محصول محصول را وارد کنید' className='add-product-input' />
            </div>
            {/* item */}
            <div className='add-product-form-group'>
                <input type="text" placeholder='نام محصول را وارد کنید' className='add-product-input' />
            </div>
            {/* item */}
            <div className='add-product-form-group'>
                <input type="text" placeholder='نام محصول را وارد کنید' className='add-product-input' />
            </div>
            {/* item */}
            <div className='add-product-form-group'>
                <input type="text" placeholder='نام محصول را وارد کنید' className='add-product-input' />
            </div>
            {/* item */}
            <div className='add-product-form-group'>
                <input type="text" placeholder='نام محصول را وارد کنید' className='add-product-input' />
            </div>
            {/* item */}
            <div className='add-product-form-group'>
                <input type="text" placeholder='نام محصول را وارد کنید' className='add-product-input' />
            </div>
            <button className='add-product-form-btn'>افزودن محصول</button>
           </div>
        </form>
    </div>
  )
}
