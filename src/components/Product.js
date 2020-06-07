import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ProductContext } from "../Context";

export default class Product extends Component {
  static contextType = ProductContext;
  render() {
    const value = this.context;
    const { addToCart, handleDetail, openModal } = value;
    const { id, title, img, price, inCart } = this.props.product;

    return (
      <div className="product-wrapper col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <div className="img-container p-5" onClick={() => handleDetail(id)}>
            <Link to="/details">
              <img src={img} alt="product" className="card-img-top" />
            </Link>
            <button
              className="card-btn"
              disabled={inCart ? true : false}
              onClick={() => {
                addToCart(id);
                openModal(id);
              }}
            >
              {inCart ? (
                <p className="text-capitalize mb-0" disabled>
                  in cart
                </p>
              ) : (
                <i className="fas fa-cart-plus"></i>
              )}
            </button>
          </div>
          <div className="card-footer d-flex justify-content-between">
            <p className="mb-0 align-self-center">{title}</p>
            <h5 className="text-blue mb-0 font-italic">
              <span className="mr-1">$</span>
              {price}
            </h5>
          </div>
        </div>
      </div>
    );
  }
}
Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    img: PropTypes.string,
    inCart: PropTypes.bool,
    price: PropTypes.number,
  }).isRequired,
};
