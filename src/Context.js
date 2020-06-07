import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      detailProduct,
      cart: [],
      modalOpen: false,
      modalProduct: detailProduct,
      cartSubTotal: 0,
      cartTax: 0,
      cartTotal: 0,
      // extra
    };
  }
  componentDidMount() {
    this.setProducts();
  }
  setProducts = () => {
    let products = [];
    storeProducts.forEach((item) => {
      let singleItem = { ...item };
      products = [...products, singleItem];
    });
    this.setState(() => {
      return {
        products,
      };
    });
  };
  getItem = (id) => {
    return this.state.products.find((item) => item.id === id);
  };
  handleDetail = (id) => {
    let detailProduct = this.getItem(id);
    this.setState(() => {
      return {
        detailProduct,
      };
    });
  };
  addToCart = (id) => {
    let tempProducts = [...this.state.products];
    let index = tempProducts.indexOf(this.getItem(id));
    let product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(
      () => {
        return {
          products: tempProducts,
          cart: [...this.state.cart, product],
        };
      },
      () => {
        this.addTotal();
      }
    );
  };
  openModal = (id) => {
    let product = this.getItem(id);
    this.setState(() => {
      return {
        modalProduct: product,
        modalOpen: true,
      };
    });
  };
  closeModal = () => {
    this.setState(() => {
      return {
        modalOpen: false,
      };
    });
  };
  increment = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    let product = tempCart[index];

    product.count += 1;
    product.total = product.count * product.price;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
        };
      },
      () => this.addTotal()
    );
  };
  decrement = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    let product = tempCart[index];
    product.count -= 1;
    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.count * product.price;
      this.setState(
        () => {
          return {
            cart: [...tempCart],
          };
        },
        () => this.addTotal()
      );
    }
  };

  removeItem = (id) => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter((item) => item.id !== id);

    let index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
          products: [...tempProducts],
        };
      },
      () => {
        this.addTotal();
      }
    );
  };
  clearCart = () => {
    this.setState(
      () => {
        return {
          cart: [],
        };
      },
      () => {
        this.setProducts();
        this.addTotal();
      }
    );
  };
  addTotal = () => {
    let subTotal = 0;
    this.state.cart.map((item) => (subTotal += item.total));
    let tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState(() => {
      return {
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total,
      };
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
          handleSubmit: this.handleSubmit,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer, ProductContext };
