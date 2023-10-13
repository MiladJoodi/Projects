import React, { useEffect, useState } from 'react'
import './ProductTable.css'
import DeleteModal from '../DeleteModal/DeleteModal'
import DetailsModal from '../DetailsModal/DetailsModal'
import EditModal from '../EditModal/EditModal'
import ErrorBox from '../ErrorBox/ErrorBox'

import {FcEditImage, FcLike, FcMiddleBattery, FcMoneyTransfer,FcBarChart,FcLandscape, FcMindMap} from 'react-icons/fc'

export default function ProductTable({allProducts, getAllProducts}) {

  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false)
  const [isShowDetailsModal, setIsShowDetailsModal] = useState(false)
  const [isShowEditModal, setIsShowEditModal] = useState(false)
  const [mainProductInfos, setMainproductInfos] = useState({})
  const [productID, setProductID] = useState(null)

  const [productNewTitle,setProductNewTitle] = useState('')
  const [productNewPrice,setProductNewPrice] = useState('')
  const [productNewCount,setProductNewCount] = useState('')
  const [productNewImg,setProductNewImg] = useState('')
  const [productNewPopularity,setProductNewPopularity] = useState('')
  const [productNewSale,setProductNewSale] = useState('')
  const [productNewColors,setProductNewColors] = useState('')





  const deleteModalCancelAction = ()=>{
    setIsShowDeleteModal(false)
  }

  const deleteModalSubmitAction = (event)=>{
    setIsShowDeleteModal(false)

    fetch(`http://localhost:8000/api/products/${productID}`,{
      method: 'DELETE'
    }).then(res=> res.json())
    .then(result=> {
      console.log(result);
      getAllProducts()
    })

  }

  const closeDetailsModal = ()=>{
    setIsShowDetailsModal(false)
    console.log('details closed');
  }

  const updateProductInfos = (event)=>{
    event.preventDefault()
    setIsShowEditModal(false)
    
    const updatedProduct = {
      title: productNewTitle,
      price: productNewPrice,
      count: productNewCount,
      img: productNewImg,
      popularity: productNewPopularity,
      sale: productNewSale,
      colors: productNewColors,
    }

    fetch(`http://localhost:8000/api/products/${productID}`,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedProduct)
    }).then(res => res.json())
    .then(result=> {
      console.log(result);
      getAllProducts()
    })

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
             <tr className='product-table-row' key={product.id}>
            <td>
                <img src={product.img} className='product-table-img' />
            </td>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>{product.count}</td>
            <td>
                <button className='product-table-btn' onClick={()=>{
                  setIsShowDetailsModal(true)
                  setMainproductInfos(product)
                }}>جزئیات</button>
                <button className='product-table-btn' onClick={()=>{
                  setProductID(product.id)
                  setIsShowDeleteModal(true)
                }}>حذف</button>
                <button className='product-table-btn' onClick={()=>{
                  setIsShowEditModal(true)
                  setProductID(product.id)
                  setProductNewTitle(product.title)
                  setProductNewPrice(product.price)
                  setProductNewCount(product.count)
                  setProductNewImg(product.img)
                  setProductNewPopularity(product.popularity)
                  setProductNewSale(product.sale)
                  setProductNewColors(product.colors)
                }}>ویرایش</button>
            </td>
          </tr>
          ))}
         
        </tbody>
      </table>):(<ErrorBox msg='محصولی یافت نشد' />)}
      
      {isShowDeleteModal && <DeleteModal cancelAction={deleteModalCancelAction} submitAction={deleteModalSubmitAction} />}
      {isShowDetailsModal && 
      <DetailsModal
      onHide={closeDetailsModal}
      >
        <table className='cms-table cms-table-60'>
           <thead>
           <tr>
                <th>اسم</th>
                <th>فروش</th>
                <th>رنگ بندی</th>
            </tr>
           </thead>
           <tbody>
            <tr>
                <td>{mainProductInfos.title}</td>
                <td>{mainProductInfos.sale.toLocaleString()}</td>
                <td>{mainProductInfos.colors}</td>
            </tr>
           </tbody>
        </table>
        </DetailsModal>}
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
              <input type="text" placeholder='اسم جدید را وارد کنید' className='edit-product-input' value={productNewTitle} onChange={(event)=> setProductNewTitle(event.target.value)} />
          </div>
          {/* item */}
          <div className='edit-product-form-group'>
              <span>
                <FcMoneyTransfer />
              </span>
              <input type="text" placeholder='قیمت جدید را وارد کنید' className='edit-product-input' value={productNewPrice} onChange={(event)=> setProductNewPrice(event.target.value)} />
          </div>
          {/* item */}
          <div className='edit-product-form-group'>
              <span>
                <FcMiddleBattery />
              </span>
              <input type="text" placeholder='موجودی جدید را وارد کنید' className='edit-product-input' value={productNewCount} onChange={(event)=> setProductNewCount(event.target.value)} />
          </div>
          {/* item */}
          <div className='edit-product-form-group'>
              <span>
              <FcLandscape />
              </span>
              <input type="text" placeholder='عکس جدید را وارد کنید' className='edit-product-input' value={productNewImg} onChange={(event)=> setProductNewImg(event.target.value)} />
          </div>
          {/* item */}
          <div className='edit-product-form-group'>
              <span>
              <FcLike />
              </span>
              <input type="text" placeholder='محبوبیت جدید را وارد کنید' className='edit-product-input' value={productNewPopularity} onChange={(event)=> setProductNewPopularity(event.target.value)} />
          </div>
          {/* item */}
          <div className='edit-product-form-group'>
              <span>
              <FcBarChart />
              </span>
              <input type="text" placeholder='میزان فروش جدید را وارد کنید' className='edit-product-input' value={productNewSale} onChange={(event)=> setProductNewSale(event.target.value)} />
          </div>
          {/* item */}
          <div className='edit-product-form-group'>
              <span>
              <FcMindMap />
              </span>
              <input type="text" placeholder='تعداد رنگ بندی جدید را وارد کنید' className='edit-product-input' value={productNewColors} onChange={(event)=> setProductNewColors(event.target.value)} />
          </div>
        
        </EditModal>
      )}

    </div>
  )
}
