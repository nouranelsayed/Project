import React from "react";
import { Link } from "roter-dom";
export default function productDetails() {
  return (
    <>
      <div className="CardDetailscontainer">
        <div className="productImage">
          <img
            className="imgproduct"
            src="https://www.affordablemac.co.uk/wp-content/uploads/2022/05/Macbook-Pro-16_SG.jpg"
            alt="productimage"
          />

          <div className="productimgIcon">
            <Link className="producIcon" to="">
              <i className="fa-regular fa-heart loveIcon"></i>
            </Link>
            <Link className="producIcon" to="">
              <i className="fa-regular fa-bell bellIcon "></i>
            </Link>
            <Link className="producIcon" to="">
              <i className="fa-regular fa-share-from-square shareIcon"></i>
            </Link>
          </div>

          <div className="productGallery">
            <div className="imgInGallery">
              <img
                className="w-100 rounded-1"
                src="https://th.bing.com/th/id/OIP.lusxPl3CK-4zk-5QDOeWhAHaJL?w=570&h=706&rs=1&pid=ImgDetMain"
                alt="img"
              />
            </div>

            <div className="imgInGallery">
              <img
                className="w-100 rounded-1"
                src="https://th.bing.com/th/id/OIP.lusxPl3CK-4zk-5QDOeWhAHaJL?w=570&h=706&rs=1&pid=ImgDetMain"
                alt="img"
              />
            </div>
            <div className="imgInGallery">
              <img
                className="w-100 rounded-1"
                src="https://th.bing.com/th/id/OIP.lusxPl3CK-4zk-5QDOeWhAHaJL?w=570&h=706&rs=1&pid=ImgDetMain"
                alt="img"
              />
            </div>
            <div className="imgInGallery">
              <img
                className="w-100 rounded-1"
                src="https://th.bing.com/th/id/OIP.lusxPl3CK-4zk-5QDOeWhAHaJL?w=570&h=706&rs=1&pid=ImgDetMain"
                alt="img"
              />
            </div>
            <div className="imgInGallery">
              <img
                className="w-100 rounded-1"
                src="https://th.bing.com/th/id/OIP.lusxPl3CK-4zk-5QDOeWhAHaJL?w=570&h=706&rs=1&pid=ImgDetMain"
                alt="img"
              />
            </div>
          </div>
        </div>

        <div className="productDetailsInfo">
          <p className="productNaame">
            Macbook Pro M2 MNJE3 2022 LLA 13.3 inch
          </p>
          <div className="badges">
            <span className="rateBadge ">
              <i className="fa-solid fa-star "></i> 4.9
            </span>
            <span className="speratorSpan">|</span>
            <span className="soldNum"> sold 125</span>
          </div>

          <div className="stock mt-4">
            <span className="storeSpan stockIcon ">
              <i className="fa-solid fa-store storeIcon me-1"></i> In Stock
            </span>
            <span className="guarnteedSpan stockIcon">
              <i className="fa-solid fa-certificate guranteedIcon me-1"></i>{" "}
              Guarnteed
            </span>
            <span className="deleiverySpan stockIcon">
              <i className="fa-solid fa-truck deleiveryIcon me-1"></i>Free
              Delievry
            </span>
          </div>

          <div className="color-choose mt-3">
            <ul className="color-chooseUl">
              <li>
                {" "}
                <h5 className="d-inline-block me-3">Select color:</h5>
              </li>
              <div className="colorCheckContainer">
                <li className=" colorItemInfo">
                  {" "}
                  <input
                    className="blackInfo"
                    type="radio"
                    name="color"
                    id="balck"
                  />
                </li>
                <span className="colorCheck">
                  <i className="fa-regular fa-circle-check"></i>
                </span>
              </div>
              <li className=" colorItemInfo">
                {" "}
                <input
                  className="grayInfo"
                  type="radio"
                  name="color"
                  id="gray"
                />
              </li>
            </ul>
          </div>

          <div className="Info">
            <table className="InfoTable">
              <tr>
                <td>
                  <ul>
                    <li className="detailName">Brand: </li>
                  </ul>
                </td>
                <td>
                  <ul className="infoValue">
                    <li>Apple</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <ul>
                    <li className="detailName">Name:</li>
                  </ul>{" "}
                </td>
                <td>
                  <ul className="infoValue">
                    <li>Macbook pro</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <ul>
                    <li className="detailName">Size:</li>
                  </ul>{" "}
                </td>
                <td>
                  <ul className="infoValue">
                    <li>13.3</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  <ul>
                    <li className="detailName">Hard Disk Size:</li>
                  </ul>
                </td>
                <td>
                  <ul className="infoValue">
                    <li>256GB</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  <ul>
                    <li className="detailName">CPU Model:</li>
                  </ul>
                </td>
                <td>
                  <ul className="infoValue">
                    <li>core i5</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  <span id="dots">...</span>
                </td>
              </tr>
              <tr id="more">
                <td>
                  <ul>
                    <li className="detailName">Ram Memory:</li>
                  </ul>
                </td>
                <td>
                  <ul className="infoValue">
                    <li>8GB</li>
                  </ul>
                </td>
              </tr>
            </table>
            <button onclick="moreFunction()" id="myBtn">
              Read more
            </button>
          </div>
        </div>

        <div className="paymentCard">
          <div className="salary">
            <h5 className="priceSalary">$ 1299.00</h5>
            <span className="salePrice">
              {" "}
              <i className="fa-solid fa-percent me-1"></i> 12%
            </span>
          </div>
          <span className="lastPrice">last price $1499.00</span>

          <div className="buyDiv">
            <div className="paymentsTxt">
              <span className="payNow">Pay Now!</span>
              <p className="installment">Buy in installments</p>
              <span className="intallmentPeriod">
                Choose you intallments Period
              </span>
            </div>
            <div className="intallmentsCardcontainer">
              <div className="period firstPeriod">
                <h6 className="months">3 Months</h6>
              </div>
              <div className="period seconedPeriod">
                {" "}
                <h6 className="months">6 Months</h6>
              </div>
              <div className="period thirdPeriod">
                {" "}
                <h6 className="months">9 Months</h6>
              </div>
              <div className="period fourthPeriod">
                {" "}
                <h6 className="months">12 Months</h6>
              </div>
            </div>
          </div>

          <div className="paymentBtns">
            <button className="btn btn-primary w-100 mb-2" type="button">
              Buy Now
            </button>
            <button className="btn btn-outline-primary w-100" type="button">
              Add To Cart
            </button>
          </div>
        </div>
      </div>

      <div className="tableDetails mt-5">
        <div className="row">
          <div className="col-md-8">
            <div id="techincalTable">
              <table className="table table-striped">
                <thead>
                  <tr className="firstRow">
                    <td className="tech">
                      <Link className="tableHead " to="#techincalTable">
                        Techincal Details{" "}
                      </Link>
                    </td>
                    <td>
                      <Link className="tableHead " to="#similarProducts">
                        Similar Products
                      </Link>
                    </td>
                    <td>
                      <Link className="tableHead " to="#commentsDiv">
                        Comments
                      </Link>
                    </td>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="tableName py-3" colspan="3">
                      <h4 className="tableName">Techincal Details</h4>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h5 className="display detailName">Display :</h5>
                    </td>
                    <td colspan="2">
                      <p className="displayDetails">
                        13.3-inch (diagonal) LED backlit display with IPS
                        technology
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h5 className="graphic detailName">Graphics :</h5>
                    </td>
                    <td colspan="2">
                      <p className="graphicDetails"> Apple i-core 10</p>{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h5 className="processor detailName">Processor :</h5>
                    </td>
                    <td colspan="2">
                      <p className="processorDetails">lorem2</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h5 className="inTheBox detailName">In the Box :</h5>
                    </td>
                    <td colspan="2">
                      <p className="inTheBoxDetails">
                        Lorem ipsum dolor sit amet consectetur.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h5 className="height detailName">Height :</h5>
                    </td>
                    <td colspan="2">
                      <p className="heightDetails">
                        Lorem ipsum dolor sit amet.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h5 className="width detailName">Width :</h5>
                    </td>
                    <td colspan="2">
                      <p className="widthDetails">
                        Lorem ipsum dolor sit amet consectetur.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h5 className="weight detailName">Weight :</h5>
                    </td>
                    <td colspan="2">
                      <p className="wiegtDetails">
                        Lorem ipsum dolor sit amet.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h5 className="date detailName">Release Date :</h5>
                    </td>
                    <td colspan="2">
                      <p className="dateDetails">Lorem ipsum dolor sit amet.</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div
        id="similarProducts"
        className="carouselContainer container ms-2 mt-5"
      >
        <h4 className="similarHead"> Similar Products</h4>
        <div className="owl-carousel d-flex justify-content-center">
          <div className="item">
            <div className="productCard">
              <div className="sale">12%</div>
              <div className="productImg ">
                <img
                  className="w-75"
                  src="https://img.freepik.com/free-psd/laptop-mock-up-design_1307-43.jpg?t=st=1713905344~exp=1713908944~hmac=6f0ed5bae32e491a9f63484e8ae296ae1efe7942e4f3d8fd0bade138e2bf24a6&w=740"
                  alt="productImage"
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
          </div>
          <div className="item">
            <div className="productCard">
              <div className="sale">12%</div>
              <div className="productImg ">
                <img
                  className="w-75"
                  src="https://img.freepik.com/free-psd/laptop-mock-up-design_1307-43.jpg?t=st=1713905344~exp=1713908944~hmac=6f0ed5bae32e491a9f63484e8ae296ae1efe7942e4f3d8fd0bade138e2bf24a6&w=740"
                  alt="productImage"
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
          </div>
          <div className="item">
            <div className="productCard">
              <div className="sale">12%</div>
              <div className="productImg ">
                <img
                  className="w-75"
                  src="https://img.freepik.com/free-psd/laptop-mock-up-design_1307-43.jpg?t=st=1713905344~exp=1713908944~hmac=6f0ed5bae32e491a9f63484e8ae296ae1efe7942e4f3d8fd0bade138e2bf24a6&w=740"
                  alt="productImage"
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
          </div>

          <div className="item">
            <div className="productCard">
              <div className="sale">12%</div>
              <div className="productImg ">
                <img
                  className="w-75"
                  src="https://img.freepik.com/free-psd/laptop-mock-up-design_1307-43.jpg?t=st=1713905344~exp=1713908944~hmac=6f0ed5bae32e491a9f63484e8ae296ae1efe7942e4f3d8fd0bade138e2bf24a6&w=740"
                  alt="productImage"
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
          </div>
          <div className="item">
            <div className="productCard">
              <div className="sale">12%</div>
              <div className="productImg ">
                <img
                  className="w-75"
                  src="https://img.freepik.com/free-psd/laptop-mock-up-design_1307-43.jpg?t=st=1713905344~exp=1713908944~hmac=6f0ed5bae32e491a9f63484e8ae296ae1efe7942e4f3d8fd0bade138e2bf24a6&w=740"
                  alt="productImage"
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
          </div>
        </div>
      </div>

      <div id="commentsDiv" className="commentsDiv mt-5">
        <h5 className="commentHead">Comments</h5>
        <div className="row">
          <div className="col-md-3">
            <div className="commentscol">
              <p className="commentsP my-3">
                Leave your Comments here to other customers
              </p>

              <textarea
                className="commentsText rounded-1 px-3"
                name="comments"
                rows="2"
                cols="30"
                placeholder="Share your thoughts about the product here"
              ></textarea>

              <button
                className="btn btn-outline-primary w-100 mt-3"
                type="button"
              >
                Comment
              </button>

              <div className="commentRate mt-2">
                <h6 className="ratingComments">By features</h6>

                <div className="product-reviews-bar ">
                  <ul className=" reviewsBarList">
                    <li className="reviewsBarItem mt-1">
                      <div className="progressBar d-flex align-items-center">
                        <span className="progressBarName ">Battery Charge</span>
                        <div
                          className="progress w-50 mx-1 mt-1"
                          role="progressbar"
                          aria-label="Basic example"
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div className="progress-bar w-75 "></div>
                        </div>
                        <span id="value" className="progressBarQuantity">
                          4.5
                        </span>
                      </div>
                    </li>
                    <li className="reviewsBarItem mt-1">
                      <div className="progressBar d-flex align-items-center">
                        <span className="progressBarName pe-4 ">Monitor</span>
                        <div
                          className="progress w-50 mx-1 mt-1"
                          role="progressbar"
                          aria-label="Basic example"
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div className="progress-bar w-75 "></div>
                        </div>
                        <span id="value" className="progressBarQuantity">
                          4.5
                        </span>
                      </div>
                    </li>
                    <li className="reviewsBarItem mt-1">
                      <div className="progressBar d-flex align-items-center">
                        <span className="progressBarName pe-4 ">Lightness</span>
                        <div
                          className="progress w-50 mx-1 mt-1"
                          role="progressbar"
                          aria-label="Basic example"
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div className="progress-bar w-75 "></div>
                        </div>
                        <span id="value" className="progressBarQuantity">
                          4.5
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
