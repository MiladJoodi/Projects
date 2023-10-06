import React, { useState } from "react";
import "./ProductsTable.css";
import DeleteModal from "./../DeleteModal/DeleteModal";
import DetailsModal from "./../DetailsModal/DetailsModal";
import EditModal from "./../EditModal/EditModal";

export default function ProductsTable() {
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowDetailsModal, setIsShowDetailsModal] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);

  const deleteModalCancelAction = () => {
    console.log("مودال کنسل شد");
    setIsShowDeleteModal(false);
  };

  const deleteModalSubmitAction = () => {
    console.log("مودال تایید شد");
    setIsShowDeleteModal(false);
  };

  const closeDetailsModal = () => {
    setIsShowDetailsModal(false);
    console.log("closed");
  };

  const updateProductInfos = (event)=>{
    event.preventDefault()
    console.log('ویرایش شد');
  }

  return (
    <>
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
          <tr className="products-table-tr">
            <td>
              <img
                src="/img/oil.jpeg"
                alt="oil image"
                className="products-table-img"
              />
            </td>
            <td>روغن سرخ کردنی</td>
            <td>92000 تومان</td>
            <td>82</td>
            <td>
              <button
                className="products-table-btn"
                onClick={() => setIsShowDetailsModal(true)}
              >
                جزییات
              </button>
              <button
                className="products-table-btn"
                onClick={() => setIsShowDeleteModal(true)}
              >
                حذف
              </button>
              <button className="products-table-btn" onClick={()=> setIsShowEditModal(true)}>ویرایش</button>
            </td>
          </tr>
        </tbody>
      </table>
      {isShowDeleteModal && (
        <DeleteModal
          submitAction={deleteModalSubmitAction}
          cancelAction={deleteModalCancelAction}
        />
      )}
      {isShowDetailsModal && <DetailsModal onHide={closeDetailsModal} />}
      {isShowEditModal && <EditModal 
      
      onClose={() => setIsShowEditModal(false)}
      onSubmit={updateProductInfos}
      />}
    </>
  );
}
<DetailsModal />;
