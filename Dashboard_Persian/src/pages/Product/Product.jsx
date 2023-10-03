import React from "react";
import "./Product.css";
import { productsData } from './../../datas'
import Chart from "./../../components/Chart/Chart";
import { Link } from "react-router-dom";
import PublishIcon from "@mui/icons-material/Publish";

export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">محصولات</h1>
        <Link to="/newProduct">
          <button className="productAddButton">ایجاد محصول جدید</button>
        </Link>
      </div>

      <div className="productTop">
        <div className="productTopLeft">
          <Chart title="نمودار فروش" data={productsData} dataKey="sales" />
        </div>
        <div className="productTopRight">
            <div className="productInfoTop">
              <img src="/images/dell.jpg" alt="Dell LapTop" className='productInfoImg' />
              <span className='productName'>Dell LapTop</span>
            </div>

            <div className="productInfoBottom">
              <div className="productInfoItem">
                <div className="productInfoKey">کد محصول</div>
                <div className="productInfoValue">132</div>
              </div>
              <div className="productInfoItem">
                <div className="productInfoKey">نام محصول</div>
                <div className="productInfoValue">لپ تاپ 14 اینچی HP</div>
              </div>
              <div className="productInfoItem">
                <div className="productInfoKey">فروش</div>
                <div className="productInfoValue">198,000,000 تومان</div>
              </div>
              <div className="productInfoItem">
                <div className="productInfoKey">فعال</div>
                <div className="productInfoValue">بله</div>
              </div>
              <div className="productInfoItem">
                <div className="productInfoKey">موجود در انبار</div>
                <div className="productInfoValue">خیر</div>
              </div>
            </div>

          </div>

        </div>

        <div className="productBottom">
          <form className="productForm">

            <div className='productFormLeft'>
              <label>Product Name</label>
              <input type="text" placeholder='Dell Laptop' />

              <label>In Stock</label>
              <select id="inStock">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>

              <label>Active</label>
              <select id="inStock">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>

            </div>

            <div className='productFormRight'>

              <div className='productUploader'>
                <img src="/images/dell.jpg" alt="profile photo" className='productUploaderImg' />
                <label>
                  <PublishIcon />
                </label>
                <input type="file" style={{display: "none"}} />
              </div>

              <button className='productButton'>Upload (Edit)</button>

            </div>

          </form>
        </div>

    </div>
  )
}
