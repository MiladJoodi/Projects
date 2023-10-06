import React from "react";
import "./Products.css";
import Errorbox from "../Errorbox/Errorbox";
import AddNewProduct from "../AddNewProduct/AddNewProduct";

export default function Products() {
  return (
    <>
      <AddNewProduct />
      <Errorbox msg="هیچ محصولی یافت نشد" />
    </>
  );
}
