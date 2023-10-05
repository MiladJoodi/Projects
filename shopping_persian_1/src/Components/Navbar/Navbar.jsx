import React, { useContext } from "react";
import "./Navbar.css";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import ProductContext from "../Context/ProductContext";

export default function Navbar() {

  const contextData = useContext(ProductContext)

  const basketIconHandler = ()=>{
contextData.setIsShowCart(prevShow => !prevShow)
    
  }

  return (
    <div className="navbarShop">
      <div className="navbarShopContainer">
        <div className="navbarRight">خوش آمدید</div>
        <div className="navbarCenter">
          {/* start search */}
          <div class="input-group">
            <div class="form-outline">
              <input type="search" id="form1" className="form-control" />
              <label class="form-label" for="form1">
                جستجو سریع
              </label>
            </div>
            <button type="button" className="btn btn-primary searchBtn">
              <i className="fas fa-search"></i>
            </button>
          </div>
          {/* end search */}
        </div>
        <div className="navbarLeft">
          <div className="basket">
            <HiOutlineShoppingCart className="basketIcon" onClick={basketIconHandler} />
            <span className="basketBadge">{contextData.userCart.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
