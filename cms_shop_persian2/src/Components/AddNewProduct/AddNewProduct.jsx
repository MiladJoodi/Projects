import React, { useState } from 'react'
import './AddNewProduct.css'

export default function AddNewProduct({getAllProducts}) {

    const [titleNewProduct, setTitleNewProduct] = useState('')
    const [priceNewProduct, setPriceNewProduct] = useState('')
    const [countNewProduct, setCountNewProduct] = useState('')
    const [imgNewProduct, setImgNewProduct] = useState('')
    const [popularityNewProduct, setPopularityNewProduct] = useState('')
    const [saleNewProduct, setSaleNewProduct] = useState('')
    const [colorsNewProduct, setColorsNewProduct] = useState('')

    const newProductInfos = {
        title: titleNewProduct,
        price: priceNewProduct,
        count: countNewProduct,
        img: imgNewProduct,
        popularity: popularityNewProduct,
        sale: saleNewProduct,
        colors: colorsNewProduct
    }

    const addNewProduct = (event)=>{
        event.preventDefault()
        console.log('added');

        fetch('http://localhost:8000/api/products/',{
            method: 'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(newProductInfos)
        }).then(res=> res.json())
        .then(result=> {
            console.log(result);
            emptyInputs()
            getAllProducts()
        })
    }

    function emptyInputs (){
        setTitleNewProduct('')
        setPriceNewProduct('')
        setCountNewProduct('')
        setImgNewProduct('')
        setPopularityNewProduct('')
        setSaleNewProduct('')
        setColorsNewProduct('')
    }

  return (
    <div className='add-product'>
        <h1 className='add-product-title'>افزودن محصول جدید</h1>
        {/* add product form */}
        <form action="#" className='add-product-form'>
           <div className='add-product-form-wrapper'>
             {/* item */}
             <div className='add-product-form-group'>
                <input type="text" placeholder='نام کالا را وارد کنید' className='add-product-input' value={titleNewProduct} onChange={(event)=>setTitleNewProduct(event.target.value)} />
            </div>
            {/* item */}
            <div className='add-product-form-group'>
                <input type="text" placeholder='قیمت کالا را وارد کنید' className='add-product-input' value={priceNewProduct} onChange={(event)=>setPriceNewProduct(event.target.value)} />
            </div>
            {/* item */}
            <div className='add-product-form-group'>
                <input type="text" placeholder='موجودی کالا را وارد کنید' className='add-product-input' value={countNewProduct} onChange={(event)=>setCountNewProduct(event.target.value)} />
            </div>
            {/* item */}
            <div className='add-product-form-group'>
                <input type="text" placeholder='تصویر کالا را وارد کنید' className='add-product-input' value={imgNewProduct} onChange={(event)=>setImgNewProduct(event.target.value)} />
            </div>
            {/* item */}
            <div className='add-product-form-group'>
                <input type="text" placeholder='میزان محبوبیت کالا را وارد کنید' className='add-product-input' value={popularityNewProduct} onChange={(event)=>setPopularityNewProduct(event.target.value)} />
            </div>
            {/* item */}
            <div className='add-product-form-group'>
                <input type="text" placeholder='میزان فروش کالا را وارد کنید' className='add-product-input' value={saleNewProduct} onChange={(event)=>setSaleNewProduct(event.target.value)} />
            </div>
            {/* item */}
            <div className='add-product-form-group'>
                <input type="text" placeholder='تعداد رنگ بندی کالا را وارد کنید' className='add-product-input' value={colorsNewProduct} onChange={(event)=>setColorsNewProduct(event.target.value)} />
            </div>
            <button className='add-product-form-btn' onClick={addNewProduct}>افزودن محصول</button>
           </div>
        </form>
    </div>
  )
}
