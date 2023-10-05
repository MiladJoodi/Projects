import React, { useContext } from "react";
import "./Cart.css";
import { MdOutlineDelete } from "react-icons/md";
import ProductContext from "../Context/ProductContext";


export default function Cart() {
  const contextData = useContext(ProductContext)

  const closeBtnhandler = ()=>{
    contextData.setIsShowCart(false)
  }

  const cartDeleteProduct = (productID)=>{
    // event.preventDefault()
    console.log(productID);
    contextData.setUserCart(contextData.userCart.filter(user=> user.id !== productID ))
    
  }
  if(contextData.userCart.length === 0){
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
        {/* cart product */}
        {contextData.userCart.map(userProduct=> (
          <div className="cartProductContainer" key={userProduct.id}>
          <img src={userProduct.img} className="cartProductImg" />
          <div className="cartProductDetails">
            <span className="cartProductTitle">{userProduct.title}</span>
            <span className="cartProductPrice">{userProduct.price} تومان</span>
            <div className="cartProductDeleteContainer" onClick={()=> cartDeleteProduct(userProduct.id)}>
              <a href="javascript:void(0)" className="btn btn-outline-danger cartProductDelete" data-mdb-ripple-color="dark" >
              <MdOutlineDelete className="cartDeleteBtn" />
              حذف از سبد خرید
              </a>
            </div>
          </div>
        </div>
        ))}
        {/* cart product */}
        {contextData.userCart.length > 0 && 
        <button className="btn btn-success cardFinalyBtn text-center">نهایی کردن سفارش</button>
        }
          
      </div>
    </div>
  );
}
