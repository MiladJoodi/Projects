import React, { useEffect, useState } from 'react'
import './ProductTable.css'
import DeleteModal from '../DeleteModal/DeleteModal'
import DetailsModal from '../DetailsModal/DetailsModal'
import EditModal from '../EditModal/EditModal'
import ErrorBox from '../ErrorBox/ErrorBox'

import {FcEditImage, FcLike, FcMiddleBattery, FcMoneyTransfer,FcBarChart,FcLandscape, FcMindMap} from 'react-icons/fc'

export default function ProductTable() {

  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false)
  const [isShowDetailsModal, setIsShowDetailsModal] = useState(false)
  const [isShowEditModal, setIsShowEditModal] = useState(false)
  const [allProducts, setAllProducts] = useState([])
  const [mainProductInfos, setMainproductInfos] = useState({})
  const [productID, setProductID] = useState(null)

  const [productNewTitle,setProductNewTitle] = useState('')
  const [productNewPrice,setProductNewPrice] = useState('')
  const [productNewCount,setProductNewCount] = useState('')
  const [productNewImg,setProductNewImg] = useState('')
  const [productNewPopularity,setProductNewPopularity] = useState('')
  const [productNewSale,setProductNewSale] = useState('')
  const [productNewColors,setProductNewColors] = useState('')


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
                  setMainproductInfos(product)
                }}>جزئیات</button>
                <button className='product-table-btn' onClick={()=>{
                  setProductID(product.id)
                  setIsShowDeleteModal(true)
                }}>حذف</button>
                <button className='product-table-btn' onClick={()=>{
                  setIsShowEditModal(true)
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
        <table className='cms-table'>
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
              <input type="text" placeholder='اسم جدید را وارد کنید' className='edit-product-input' value={productNewTitle} onChange={setProductNewTitle} />
          </div>
          {/* item */}
          <div className='edit-product-form-group'>
              <span>
                <FcMoneyTransfer />
              </span>
              <input type="text" placeholder='قیمت جدید را وارد کنید' className='edit-product-input' value={productNewPrice} onChange={setProductNewPrice} />
          </div>
          {/* item */}
          <div className='edit-product-form-group'>
              <span>
                <FcMiddleBattery />
              </span>
              <input type="text" placeholder='موجودی جدید را وارد کنید' className='edit-product-input' value={productNewCount} onChange={setProductNewCount} />
          </div>
          {/* item */}
          <div className='edit-product-form-group'>
              <span>
              <FcLandscape />
              </span>
              <input type="text" placeholder='عکس جدید را وارد کنید' className='edit-product-input' value={productNewImg} onChange={setProductNewImg} />
          </div>
          {/* item */}
          <div className='edit-product-form-group'>
              <span>
              <FcLike />
              </span>
              <input type="text" placeholder='محبوبیت جدید را وارد کنید' className='edit-product-input' value={productNewPopularity} onChange={setProductNewPopularity} />
          </div>
          {/* item */}
          <div className='edit-product-form-group'>
              <span>
              <FcBarChart />
              </span>
              <input type="text" placeholder='میزان فروش جدید را وارد کنید' className='edit-product-input' value={productNewSale} onChange={setProductNewSale} />
          </div>
          {/* item */}
          <div className='edit-product-form-group'>
              <span>
              <FcMindMap />
              </span>
              <input type="text" placeholder='تعداد رنگ بندی جدید را وارد کنید' className='edit-product-input' value={productNewColors} onChange={setProductNewColors} />
          </div>
        
        </EditModal>
      )}

    </div>
  )
}
