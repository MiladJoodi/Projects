import React, { useContext } from "react";
import "./Product.css";
import { MdOutlineAttachMoney } from "react-icons/md";
import ProductContext from "../Context/ProductContext";
import Toast from "../Toast/Toast";

export default function Product() {
  const contextData = useContext(ProductContext)

  const buyHandler = ()=>{
    contextData.setIsShowToast(true)

    setTimeout(() => {
      contextData.setIsShowToast(false)
    }, 1000);
  }

  return (
    <div className="product">
      <div class="card" style={{width: '18rem'}}>
      <img src="./images/1.jpg" className="card-img-top w-75" alt="Sunset Over the Sea"/>
     <div class="card-body">
     <p class="card-text">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت</p>
     </div>
     <div className="priceContainer">
      <div className="priceWrapper">
        <span>
        <MdOutlineAttachMoney className="monyIcon" />
      </span>

      <span className="price">28,000,000 تومان</span>
      </div>
      <div className="countContainer">
      <span>موجودی در انبار</span>
      <span>12</span>
     </div>
     </div>
     <div className="productBtns">
     <button type="button" class="btn btn-secondary">جزئیات بیشتر</button>
     <button type="button" class="btn btn-secondary" onClick={buyHandler}>خرید</button>
     </div>

      </div>
    </div>
  );
}
