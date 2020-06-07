import React, { Component } from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import { ProductContext } from "../../Context";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

export default class Carts extends Component {
  static contextType = ProductContext;
  render() {
    const value = this.context;
    const { cart } = value;
    return (
      <>
        <section className="your-cart">
          {cart.length > 0 ? (
            <>
              <Title name="your" title="cart" />
              <CartColumns />
              <CartList value={value} />
              <CartTotals value={value} history={this.props.history} />
            </>
          ) : (
            <EmptyCart />
          )}
        </section>
      </>
    );
  }
}
