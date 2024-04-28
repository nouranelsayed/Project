import React from "react";
import { Link } from "router-dom";

export default function productCard() {
  return (
    <>
      <div className="productCard">
        <div className="sale">12%</div>
        <div className="productImg ">
          <img
            className="w-75"
            src="https://img.freepik.com/free-psd/laptop-mock-up-design_1307-43.jpg?t=st=1713905344~exp=1713908944~hmac=6f0ed5bae32e491a9f63484e8ae296ae1efe7942e4f3d8fd0bade138e2bf24a6&w=740"
            alt="product"
          />

          <ul className="colorList">
            <li className="black colorItem"></li>
            <li className="gray colorItem"></li>
            <li className="white colorItem"></li>
          </ul>
        </div>

        <div className="bottomBorder"></div>
        <div className="productDetails">
          <p className="productInfo  m-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing{" "}
          </p>

          <div className="product-bottom-details">
            <Link className="toCartBtn" to="">
              <i className="fa fa-shopping-cart "></i> Add to Cart
            </Link>

            <div className="productPrice">
              <small>$250.00</small>

              <span>$210.99</span>
            </div>

            <div className="product-links d-flex align-content-center flex-wrap">
              <Link className="rateNumber" to="">
                {" "}
                <i className="fa-solid fa-star starIcon"></i> 4.5
              </Link>
              <Link className="heartIcon" to="">
                <i className="fa-regular fa-heart"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
