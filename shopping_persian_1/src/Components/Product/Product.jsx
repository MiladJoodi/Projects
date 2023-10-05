import React, { useContext } from "react";
import "./Product.css";
import { MdOutlineAttachMoney } from "react-icons/md";
import ProductContext from "../Context/ProductContext";
import Toast from "../Toast/Toast";

export default function Product({title,infos}) {
  const contextData = useContext(ProductContext)

  const buyHandler = (product)=>{
    contextData.setIsShowToast(true)

    setTimeout(() => {
      contextData.setIsShowToast(false)
    }, 2000);

    let isInUserCart = contextData.userCart.some(bagProduct=> bagProduct.title == product.title)
    if(!isInUserCart){
      let newUserProductCard = {
        id: contextData.userCart.length+1,
        title: product.title,
        price: product.price,
        count:1,
        img: product.img
      }
      contextData.setUserCart((prevProducts)=> [...prevProducts, newUserProductCard])
      console.log(newUserProductCard);
    }

  }



  return (

    <>
       {contextData.allProducts.map(products=>(
        <div className="row justify-content-center mt-5 productsContainer" >
        <h3 className="text-center">{products.title}</h3>

          {products.infos.map(product =>(
                    <div className="product col-xl-3 col-lg-4 col-md-5 col-sm-10">
                    <div class="card py-3">
                      <div className="productImgContainer">
                          <img src={product.img} className="card-img-top w-75" alt="Sunset Over the Sea"/>
                      </div>
                   <div class="card-body">
                   <p class="card-text">{product.title}</p>
                   </div>
                   <div className="priceContainer">
                    <div className="priceWrapper">
                      <span>
                      <MdOutlineAttachMoney className="monyIcon" />
                    </span>
              
                    <span className="price">{product.price} تومان</span>
                    </div>
                    <div className="countContainer">
                    <span>موجودی در انبار</span>
                    <span>12</span>
                   </div>
                   </div>
                   <div className="productBtns">
                    <a href="javascript:void(0)" className="btn btn-secondary">جزئیات بیشتر</a>
                    <a href="javascript:void(0)" className="btn btn-secondary" onClick={()=>buyHandler(product)}>خرید</a>
                   </div>
              
                    </div>
                  </div>
          ))}
        </div>
    ))}
    </>

   
  );
}
