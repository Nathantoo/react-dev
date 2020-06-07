import React, { Component } from "react";
import { ProductContext } from "../Context";
import { Link } from "react-router-dom";

export default class Details extends Component {
  static contextType = ProductContext;
  render() {
    const value = this.context;
    const { detailProduct, addToCart, openModal } = value;
    const { id, title, img, inCart, price, info, company } = detailProduct;
    return (
      <div className="container py-5">
        {/* title */}
        <div className="row">
          <div className="col-10 mx-auto text-center text-blue my-5 text-title">
            <h1>{title}</h1>
          </div>
        </div>
        {/* product info */}
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <img src={img} alt="product" className="img-fluid" />
          </div>
          <div className="col-10 mx-auto col-md-6 text-capitalize my-3">
            <h4>model: {title}</h4>
            <h4 className="text-uppercase text-title text-muted mt-3 mb-2">
              made by: <span>{company}</span>
            </h4>
            <h4 className="text-blue">
              <strong>
                price: <span>$</span>
                {price}
              </strong>
            </h4>
            <p className="font-weight-bold mt-3 mb-0">
              some info abaut the product:
            </p>
            <p className="text-muted lead">{info}</p>
            {/* buttons */}
            <div className="detail-btn">
              <Link to="/">
                <button className="back-btn">back to products</button>
              </Link>
              <button
                className="add-btn"
                disabled={inCart ? true : false}
                onClick={() => {
                  addToCart(id);
                  openModal(id);
                }}
              >
                {inCart ? "in Cart" : "add to cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
