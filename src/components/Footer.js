import React from "react";

export default function Footer() {
  return (
    <div className="container">
      <div className="row footer">
        <div className="col-10 mx-auto text-center col-md-4">
          <div className="social-details">
            <span>
              <i className="fab fa-facebook"></i>
            </span>
            <span>
              <i className="fab fa-twitter"></i>
            </span>
            <span>
              <i className="fab fa-instagram"></i>
            </span>
          </div>
        </div>
        <div className="col-10 mx-auto text-center col-md-4">
          <div className="form">
            <input type="email" placeholder="send email" className="input" />
            <span className="box">
              <i className="fas fa-arrow-right"></i>
            </span>
          </div>
        </div>
        <div className=" col-10 mx-auto text-center col-md-4">
          <span className="mr-3">
            created by{" "}
            <a
              href="https://github.com/Nathantoo"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nathantoo
            </a>
          </span>
          <i className="fab fa-github fa-2x"></i>
          <i className="fab fa-paypal fa-2x ml-4 text-primary"></i>
        </div>
      </div>
    </div>
  );
}
