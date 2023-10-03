import React from "react";
import "./ProductsSection.css";

export default function ProductsSection({ title, infos }) {
  return (
    <div className="row justify-content-center mt-5">
      <h3 className="text-center">{title}</h3>

      {infos.map((product) => (
        <div className="col-xl-3 col-lg-4 col-md-5 col-sm-10 mt-5">
          <div className="card py-3 px-3">
            <div className="col-12 text-center card-img-container">
              <img src={product.img} className="card-img-top w-75" />
            </div>
            <div className="card-body text-center">
              <p className="card-text">{product.title}</p>
              <p className="price">{product.price}$</p>
              <br />
              <a href="#" className="btn btn-danger">
                Add To Cart
              </a>
              <a href="#" className="btn btn-outline-dark mt-3 text-capitalize">
                More Information
              </a>
              <p className="number">Number: {product.count}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
