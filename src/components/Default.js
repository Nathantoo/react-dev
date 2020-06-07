import React from "react";
import { Link } from "react-router-dom";

export default function Default({ location }) {
  return (
    <div className="container mt-5 default">
      <div className="row">
        <div className="col-10 mx-auto text-capitalize pt-5 text-title text-center">
          <h1 className="display-3">404</h1>
          <h1 className="text-muted">error</h1>
          <h2>page not found</h2>
          <p className="sans lead">
            The requested URL{" "}
            <span className="text-danger mr-1">{location.pathname}</span>
            was not found
          </p>
          <Link to="/">
            <button className="back-btn sans text-capitalize">
              <i className="fas fa-arrow-left mr-2 move"></i>
              back to products
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
