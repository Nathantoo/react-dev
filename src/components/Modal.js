import React, { Component } from "react";
import { ProductContext } from "../Context";
import { Link } from "react-router-dom";

export default class Modal extends Component {
  static contextType = ProductContext;
  render() {
    const value = this.context;
    const { modalOpen, closeModal, modalProduct } = value;
    const { img, title, price } = modalProduct;
    return (
      modalOpen && (
        <div className="modal-container">
          <div className="container">
            <div className="row">
              <div
                id="modal"
                className="col-8 mx-auto text-center text-capitalize col-md-6 col-lg-4 p-5"
              >
                <h5 className="text-blue">Item added to the cart</h5>
                <img src={img} className="img-fluid" alt="modalProduct" />
                <h5>{title}</h5>
                <h5 className="text-muted">price: ${price}</h5>
                <div className=" d-flex justify-content-around w-75 mx-auto mt-3 modal-btn">
                  <Link to="/">
                    <button
                      className="back-btn text-capitalize"
                      onClick={() => closeModal()}
                    >
                      continue shopping
                    </button>
                  </Link>
                  <Link to="/cart">
                    <button
                      className="add-btn text-capitalize"
                      onClick={() => closeModal()}
                    >
                      go to cart
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    );
  }
}
