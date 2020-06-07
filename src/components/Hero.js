import React, { useContext } from "react";
import { ProductContext } from "../Context";

function Hero() {
  const value = useContext(ProductContext);
  let { products } = value;
  const images = products.map((item) => item.img);

  return (
    <div className="container py-5">
      <div className="row hero p-3">
        <div className="col-10 mx-auto col-md-6">
          <img src={images[3]} alt="product" className="img-fluid" />
        </div>
        <div className="col-10 mx-auto col-md-6 d-flex align-items-center justify-content-center flex-column">
          <h6 className="discover align-self-start display-4 text-muted mb-0">
            discover
          </h6>
          <h4 className="display-4 lead text-capitalize">
            Great phones at great{" "}
            <span className="text-blue font-weight-bold"> discount</span>
          </h4>
          <span className="align-self-start text-capitalize explore">
            <a href="#myProducts">
              explore{" "}
              <span className="arrow">
                <i className="fas fa-arrow-right "></i>
              </span>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
