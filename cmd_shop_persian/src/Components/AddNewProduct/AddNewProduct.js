import React from 'react'
import './AddNewProduct.css'

export default function AddNewProduct() {
  return (
    <div className='products-main'>
        <h1 className='products-title'>افزودن محصول جدید</h1>
        
        <form action="#" className='add-product-form'>
            <div className='add-product-form-wrap'>
                {/* form item */}
                <div className='add-products-form-group'>
                        <input type="text" placeholder='اسم محصول را بنویسید' className='add-products-input' />
                </div>
                 {/* form item */}
                 <div className='add-products-form-group'>
                        <input type="text" placeholder='قیمت محصول را بنویسید' className='add-products-input' />
                </div> 
                
                {/* form item */}
                <div className='add-products-form-group'>
                        <input type="text" placeholder='موجودی محصول را بنویسید' className='add-products-input' />
                </div>
                
                 {/* form item */}
                <div className='add-products-form-group'>
                        <input type="text" placeholder='آدرس عکس محصول را بنویسید' className='add-products-input' />
                </div> 
                
                {/* form item */}
                <div className='add-products-form-group'>
                        <input type="text" placeholder='میزان محبوبیت محصول را بنویسید' className='add-products-input' />
                </div>
                
                 {/* form item */}
                <div className='add-products-form-group'>
                        <input type="text" placeholder='میزان فروش محصول را بنویسید' className='add-products-input' />
                </div>
                
                {/* form item */}
                <div className='add-products-form-group'>
                        <input type="text" placeholder='تعداد رنگ بندی محصول را بنویسید' className='add-products-input' />
                </div>

            </div>
            <button className='add-product-submit'>ثبت محصول</button>
        </form>
        
    </div>
  )
}
