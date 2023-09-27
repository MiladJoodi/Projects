import React from "react";
import "./Product.css";

import { Link } from "react-router-dom";

export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">محصولات</h1>
        <Link to="/newProduct">
          <button className="productAddButton">ایجاد محصول</button>
        </Link>
      </div>
    </div>
  );
}
