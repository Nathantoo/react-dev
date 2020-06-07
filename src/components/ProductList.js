import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductContext } from "../Context";
import Hero from "./Hero";

export default class ProductList extends Component {
  static contextType = ProductContext;

  render() {
    const value = this.context;
    const { products } = value;

    return (
      <>
        <div className="py-5">
          <Hero />
          <div className="container" id="myProducts">
            <Title name="our" title="products" />
            <div className="row">
              {products.map((product) => (
                <Product product={product} key={product.id} />
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}
