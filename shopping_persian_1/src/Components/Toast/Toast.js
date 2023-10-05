import React, { useContext } from "react";
import ProductContext from "../Context/ProductContext";

export default function Toast() {

  const contextData = useContext(ProductContext)

  return (
    <div className='toast-container position-fixed bottom-0 me-4 end-0 mb-4'>
        <div className={contextData.isShowToast ? 'toast show align-items-center text-white bg-primary' : 'toast align-items-center text-white bg-primary'}> {/* add 'show' to show toast */}
        <div className='d-flex justify-content-between align-items-center'>
        <div className='toast-body'>محصول با موفقیت به سبد اضافه شد</div>
        <button type='button' className='btn-close btn-close-white ms-3' style={{margin: '10px'}} onClick={()=>{
              contextData.setIsShowToast(false)
              
            }}></button>
        </div>
        </div>
    </div>
  )
}
