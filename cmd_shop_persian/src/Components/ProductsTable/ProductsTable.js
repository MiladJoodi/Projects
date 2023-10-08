import React, { useEffect, useState } from "react";
import "./ProductsTable.css";
import DeleteModal from "./../DeleteModal/DeleteModal";
import DetailsModal from "./../DetailsModal/DetailsModal";
import EditModal from "./../EditModal/EditModal";
import { AiOutlineDollarCircle } from "react-icons/ai";
import Errorbox from "../Errorbox/Errorbox";

export default function ProductsTable() {
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowDetailsModal, setIsShowDetailsModal] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [productID, setProductID] = useState(null)
  const [mainProductsInfo, setMainProductsInfo] = useState({})

  useEffect(() => {
    getAllProducts()
  }, []);
  
  const getAllProducts = ()=>{
    fetch("http://localhost:8000/api/products/")
    .then(res => res.json())
    .then((products) => setAllProducts(products))
  }

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
    })

  };

  const closeDetailsModal = () => {
    setIsShowDetailsModal(false);
    console.log("closed");
  };

  const updateProductInfos = (event) => {
    event.preventDefault();
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
                <td>{product.price} تومان</td>
                <td>{product.count}</td>
                <td>
                  <button
                    className="products-table-btn"
                    onClick={() => {
                      setIsShowDetailsModal(true)
                      setMainProductsInfo(product)
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
                    onClick={() => setIsShowEditModal(true)}
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
              <td>{mainProductsInfo.popularity}</td>
              <td>{mainProductsInfo.sale}</td>
              <td>{mainProductsInfo.colors}</td>
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
            />
          </div>
          {/* child */}
          <div className="edit-products-form-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="عنوان جدید را وارد کنید"
              className="edit-product-input"
            />
          </div>
          {/* child */}
          <div className="edit-products-form-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="عنوان جدید را وارد کنید"
              className="edit-product-input"
            />
          </div>
          {/* child */}
          <div className="edit-products-form-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="عنوان جدید را وارد کنید"
              className="edit-product-input"
            />
          </div>
        </EditModal>
      )}
    </>
  );
}
<DetailsModal />;
