import React, { Component } from "react";
import { Link } from "react-router-dom";
// import logo from "../logo.svg";
import { ProductContext } from "../Context";
export default class Navbar extends Component {
  static contextType = ProductContext;

  render() {
    const value = this.context;
    const { cart } = value;

    return (
      <nav className="navbar navbar-dark navbar-expand-sm px-sm-5 my-nav">
        {/* <Link to="/">
          <img src={logo} alt="logo" className="navbar-brand" />
        </Link> */}
        <div className="container-fluid ">
          <div className="row w-100 py-1">
            <div className=" mx-auto text center col-2">
              <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5">
                  <Link to="/" className="nav-link text-title">
                    simu
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mx-auto text center col-8">
              <div>
                <form className="form form2">
                  <input
                    type="text"
                    className="input"
                    placeholder="search products..."
                  />
                  <button className="box boxout" type="submit">
                    <i className="fas fa-search"></i>
                  </button>
                </form>
              </div>
            </div>
            <div className=" mx-auto text center col-2">
              <Link to="/cart" className="ml-auto">
                <button className="nav-btn ">
                  <i className="fas fa-cart-plus"></i>
                  <span className="my-cart text-mont">{cart.length}</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
