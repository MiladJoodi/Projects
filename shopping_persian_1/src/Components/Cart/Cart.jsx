import React, { useContext } from "react";
import "./Cart.css";
import { MdOutlineDelete } from "react-icons/md";
import ProductContext from "../Context/ProductContext";


export default function Cart() {
  const contextData = useContext(ProductContext)

  const closeBtnhandler = ()=>{
    contextData.setIsShowCart(false)

  }

  return (
    <div className={` ${contextData.isShowCart ? 'active' : ''} cart`}>
      <div className="cartWrapper">
        <div className="cartTitle">
        <h3>سبد خرید</h3>
        <button type="button" class="btn-close" aria-label="Close" onClick={closeBtnhandler}></button>
        </div>
        <hr />
        <div className="cartProductContainer">
          <img src="./images/1.jpg" className="cartProductImg" />
          <div className="cartProductDetails">
            <span className="cartProductTitle">گوشی سامسونگ A51</span>
            <span className="cartProductPrice">12,000,000 تومان</span>
            <span className="cartProductDelete">
              <MdOutlineDelete className="cartDeleteBtn" />
              <p>حذف از سبد خرید</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
