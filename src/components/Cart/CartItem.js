import React from "react";

export default function CartItem({ item, value }) {
  const { id, title, img, price, count, total } = item;
  const { decrement, increment, removeItem } = value;
  return (
    <div className="row my-2 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          style={{ width: "5rem", height: "5rem" }}
          className="img-fluid"
          alt="product"
        />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">product: </span>
        {title}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">price: </span>${price}
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <span className="btn btn-black mx-1" onClick={() => decrement(id)}>
              <i className="fas fa-minus"></i>
            </span>
            <span className="btn btn-black btn-no mx-1">{count}</span>
            <span className="btn btn-black mx-1" onClick={() => increment(id)}>
              <i className="fas fa-plus"></i>
            </span>
          </div>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2 font-weight-bold">
        <div className="cart-icon" onClick={() => removeItem(id)}>
          <i className="fas fa-trash"></i>
        </div>
      </div>

      <div className="col-10 mx-auto col-lg-2 font-weight-bold">
        <span className="d-lg-none ">total: </span>${total}
      </div>
    </div>
  );
}
