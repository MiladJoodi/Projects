import React, { useEffect, useState } from "react";
import "./ProductsTable.css";
import DeleteModal from "./../DeleteModal/DeleteModal";
import DetailsModal from "./../DetailsModal/DetailsModal";
import EditModal from "./../EditModal/EditModal";
import { AiOutlineDollarCircle } from "react-icons/ai";
import Errorbox from "../Errorbox/Errorbox";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ProductsTable({allProducts, getAllProducts}) {
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowDetailsModal, setIsShowDetailsModal] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);

  const [productID, setProductID] = useState(null)
  const [mainProductsInfos, setMainProductsInfos] = useState({})

const [productNewTitle,setProductNewTitle] = useState("")
const [productNewPrice,setProductNewPrice] = useState("")
const [productNewCount,setProductNewCount] = useState("")
const [productNewImg,setProductNewImg] = useState("")
const [productNewPopularity,setProductNewPopularity] = useState("")
const [productNewSale,setProductNewSale] = useState("")
const [productNewColors,setProductNewColors] = useState("")




  const deleteModalCancelAction = () => {
    console.log("مودال کنسل شد");
    setIsShowDeleteModal(false);
  };

  const deleteModalSubmitAction = () => {
    console.log("مدال تایید شد");
    fetch(`http://localhost:8000/api/products/${productID}`, {
      method: 'DELETE'
    }).then(res => res.json())
    .then(result => {
      setIsShowDeleteModal(false);
      getAllProducts()
      toast.success('حذف شد', {
        toastId: 'success1',
    })
    })

  };

  const closeDetailsModal = () => {
    setIsShowDetailsModal(false);
    console.log("closed");
  };

  const updateProductInfos = (event) => {
    event.preventDefault();

    const productsNewInfos = {
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
      body: JSON.stringify(productsNewInfos)
    }).then(res => res.json())
    .then(result=>{
      console.log(result);
      getAllProducts()
      setIsShowEditModal(false);
      toast.success('ویرایش شد', {
        toastId: 'success2',
    })
    })

    console.log("ویرایش شد");
  };


  return (
    <>
      {allProducts.length ? (
        <table className="products-table">
          <thead>
            <tr className="products-table-heading-tr">
              <th>عکس</th>
              <th>اسم</th>
              <th>قیمت</th>
              <th>موجودی</th>
            </tr>
          </thead>
          <tbody>
            {allProducts.map((product) => (
              <tr key={product.id} className="products-table-tr">
                <td>
                  <img src={product.img} className="products-table-img" />
                </td>
                <td>{product.title}</td>
                <td>{product.price.toLocaleString()} تومان</td>
                <td>{product.count}</td>
                <td>
                  <button
                    className="products-table-btn"
                    onClick={() => {
                      setIsShowDetailsModal(true)
                      setMainProductsInfos(product)
                    }}
                  >
                    جزییات
                  </button>  
                  <button
                    className="products-table-btn"
                    onClick={() => {
                      setIsShowDeleteModal(true)
                      setProductID(product.id)
                      console.log(product.id);
                    }}
                  >
                    حذف
                  </button>
                  <button
                    className="products-table-btn"
                    onClick={() => {
                      setIsShowEditModal(true)
                      setProductID(product.id)
                      setProductNewTitle(product.title)
                      setProductNewPrice(product.price)
                      setProductNewCount(product.count)
                      setProductNewImg(product.img)
                      setProductNewPopularity(product.popularity)
                      setProductNewSale(product.sale)
                      setProductNewColors(product.colors)
                    }}
                  >
                    ویرایش
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <Errorbox msg="هیچ محصولی یافت نشد" />
      )}

      {isShowDeleteModal && (
        <DeleteModal
          submitAction={deleteModalSubmitAction}
          cancelAction={deleteModalCancelAction}
          title="آیا از حذف اطمینان دارید؟"
        />
      )}
      {isShowDetailsModal && <DetailsModal onHide={closeDetailsModal}>
      <table className="cms-table">
          <thead>
            <tr>
              <th>محبوبیت</th>
              <th>فروش</th>
              <th>رنگ بندی</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{mainProductsInfos.popularity}</td>
              <td>{mainProductsInfos.sale.toLocaleString()}</td>
              <td>{mainProductsInfos.colors}</td>
            </tr>
          </tbody>
        </table>
        </DetailsModal>}
      {isShowEditModal && (
        <EditModal
          onClose={() => setIsShowEditModal(false)}
          onSubmit={updateProductInfos}
        >
          {/* child */}
          <div className="edit-products-form-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="عنوان جدید را وارد کنید"
              className="edit-product-input"
              value={productNewTitle}
              onChange={(event)=> setProductNewTitle(event.target.value)}
            />
          </div>
          {/* child */}
          <div className="edit-products-form-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="قیمت جدید را وارد کنید"
              className="edit-product-input"
              value={productNewPrice.toLocaleString()}
              onChange={(event)=> setProductNewPrice(event.target.value)}
            />
          </div>
          {/* child */}
          <div className="edit-products-form-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="موجودی جدید را وارد کنید"
              className="edit-product-input"
              value={productNewCount}
              onChange={(event)=> setProductNewCount(event.target.value)}
            />
          </div>
          {/* child */}
          <div className="edit-products-form-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="آدرس کاور جدید را وارد کنید"
              className="edit-product-input"
              value={productNewImg}
              onChange={(event)=> setProductNewImg(event.target.value)}
            />
          </div>
          {/* child */}
          <div className="edit-products-form-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="محبوبیت جدید محصول را وارد کنید"
              className="edit-product-input"
              value={productNewPopularity}
              onChange={(event)=> setProductNewPopularity(event.target.value)}
            />
          </div>
          {/* child */}
          <div className="edit-products-form-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="میزان فروش جدید را وارد کنید"
              className="edit-product-input"
              value={productNewSale}
              onChange={(event)=> setProductNewSale(event.target.value)}
            />
          </div>
          {/* child */}
          <div className="edit-products-form-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="رنگ بندی جدید را وارد کنید"
              className="edit-product-input"
              value={productNewColors}
              onChange={(event)=> setProductNewColors(event.target.value)}
            />
          </div>
        </EditModal>
      )}
<ToastContainer autoClose={2000} />
    </>
  );
}

