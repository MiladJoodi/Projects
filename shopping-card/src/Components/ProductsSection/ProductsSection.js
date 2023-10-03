import React from "react";
import "./ProductsSection.css";

export default function ProductsSection({ title }) {
  return (
    <div className="row justify-content-center mt-5">
      <h3 className="text-center">{title}</h3>

      <div className="col-xl-3 col-lg-4 col-md-5 col-sm-10 mt-5">
        <div className="card py-3 px-3">
          <div className="col-12 text-center">
            <img src="/images/1.jpg" className="card-img-top w-75" />
          </div>
          <div className="card-body text-center">
            <p className="card-text">Samsung A51</p>
            <p className="price">1200$</p>
            <br />
            <a href="#" className="btn btn-danger">
              Add To Cart
            </a>
            <a href="#" className="btn btn-outline-dark mt-3 text-capitalize">
              More Information
            </a>
            <p className="number">Number: 15</p>
          </div>
        </div>
      </div>
    </div>
  );
}
