import React, { useEffect, useState } from 'react'
import './ProductTable.css'
import DeleteModal from '../DeleteModal/DeleteModal'
import DetailsModal from '../DetailsModal/DetailsModal'
import EditModal from '../EditModal/EditModal'
import ErrorBox from '../ErrorBox/ErrorBox'

import {FcEditImage, FcLike, FcMiddleBattery, FcMoneyTransfer} from 'react-icons/fc'

export default function ProductTable() {

  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false)
  const [isShowDetailsModal, setIsShowDetailsModal] = useState(false)
  const [isShowEditModal, setIsShowEditModal] = useState(false)
  const [allProducts, setAllProducts] = useState([])

  useEffect(()=>{
    getAllProducts()
  },[])

function getAllProducts(){
  fetch('http://localhost:8000/api/products/')
  .then(res=> res.json())
  .then(result=> {
    console.log(result);
    setAllProducts(result)
  })
}


  const deleteModalCancelAction = ()=>{
    setIsShowDeleteModal(false)
  }

  const deleteModalSubmitAction = ()=>{
    setIsShowDeleteModal(false)
  }

  const closeDetailsModal = ()=>{
    setIsShowDetailsModal(false)
    console.log('details closed');
  }

  const updateProductInfos = (event)=>{
    event.preventDefault()
    console.log('ویرایش انجام شد');
  }
  

  return (
    <div className='product-table-container'>
      {allProducts.length ? (<table className='product-table'>
        <thead>
          <tr className='product-table-head'>
            <th>عکس</th>
            <th>اسم</th>
            <th>قیمت</th>
            <th>موجودی</th>
          </tr>
        </thead>
        <tbody>
          {allProducts.map(product=> (
             <tr className='product-table-row'>
            <td>
                <img src={product.img} className='product-table-img' />
            </td>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>{product.count}</td>
            <td>
                <button className='product-table-btn' onClick={()=>{
                  setIsShowDetailsModal(true)
                }}>جزئیات</button>
                <button className='product-table-btn' onClick={()=>{
                  setIsShowDeleteModal(true)
                }}>حذف</button>
                <button className='product-table-btn' onClick={()=>{
                  setIsShowEditModal(true)
                }}>ویرایش</button>
            </td>
          </tr>
          ))}
         
        </tbody>
      </table>):(<ErrorBox msg='محصولی یافت نشد' />)}
      
      {isShowDeleteModal && <DeleteModal cancelAction={deleteModalCancelAction} submitAction={deleteModalSubmitAction} />}
      {isShowDetailsModal && <DetailsModal onHide={closeDetailsModal} />}
      {isShowEditModal && (
        <EditModal
        onClose={()=> setIsShowEditModal(false)}
        onSubmit={updateProductInfos}
        >
          {/* item */}
          <div className='edit-product-form-group add-product-form-group'>
              <span>
                <FcEditImage />
              </span>
              <input type="text" placeholder='اسم جدید را وارد کنید' className='edit-product-input' />
          </div>
          {/* item */}
          <div className='edit-product-form-group'>
              <span>
                <FcMoneyTransfer />
              </span>
              <input type="text" placeholder='قیمت جدید را وارد کنید' className='edit-product-input' />
          </div>
          {/* item */}
          <div className='edit-product-form-group'>
              <span>
                <FcLike />
              </span>
              <input type="text" placeholder='اسم جدید را وارد کنید' className='edit-product-input' />
          </div>
          {/* item */}
          <div className='edit-product-form-group'>
              <span>
                <FcMiddleBattery />
              </span>
              <input type="text" placeholder='موجودی جدید را وارد کنید' className='edit-product-input' />
          </div>
        
        </EditModal>
      )}

    </div>
  )
}
