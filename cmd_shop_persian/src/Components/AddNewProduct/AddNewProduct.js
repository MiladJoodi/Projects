import React from 'react'
import './AddNewProduct.css'
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineAppstore } from "react-icons/ai";
import { LiaMoneyBillSolid } from "react-icons/lia";
import { HiOutlinePhoto } from "react-icons/hi2";
import { AiOutlineBarChart } from "react-icons/ai";


export default function AddNewProduct() {
  return (
    <div className='products-main'>
        <h1 className='products-title'>افزودن محصول جدید</h1>
        
        <form action="#" className='add-product-form'>
            <div className='add-product-form-wrap'>
                {/* form item */}
                <div className='add-products-form-group'>
                        <MdOutlineDriveFileRenameOutline />
                        <input type="text" placeholder='اسم محصول را بنویسید' className='add-products-input' />
                </div>
                 {/* form item */}
                 <div className='add-products-form-group'>
                        <LiaMoneyBillSolid />
                        <input type="text" placeholder='قیمت محصول را بنویسید' className='add-products-input' />
                </div> 
                
                {/* form item */}
                <div className='add-products-form-group'>
                        <AiOutlineAppstoreAdd />
                        <input type="text" placeholder='موجودی محصول را بنویسید' className='add-products-input' />
                </div>
                
                 {/* form item */}
                <div className='add-products-form-group'>
                        <HiOutlinePhoto />
                        <input type="text" placeholder='آدرس عکس محصول را بنویسید' className='add-products-input' />
                </div> 
                
                {/* form item */}
                <div className='add-products-form-group'>
                        <AiOutlineHeart />
                        <input type="text" placeholder='میزان محبوبیت محصول را بنویسید' className='add-products-input' />
                </div>
                
                 {/* form item */}
                <div className='add-products-form-group'>
                        <AiOutlineBarChart />
                        <input type="text" placeholder='میزان فروش محصول را بنویسید' className='add-products-input' />
                </div>
                
                {/* form item */}
                <div className='add-products-form-group'>
                        <AiOutlineAppstore />
                        <input type="text" placeholder='تعداد رنگ بندی محصول را بنویسید' className='add-products-input' />
                </div>

            </div>
            <button className='add-product-submit'>ثبت محصول</button>
        </form>
        
    </div>
  )
}
