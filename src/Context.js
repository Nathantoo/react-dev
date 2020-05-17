import React, { Component } from 'react';
import {storeProducts, detailProduct} from './data';

const ProductContext = React.createContext();
export default class ProductProvider extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            products: [],
            detailProduct: detailProduct,
            cart: [],
            modalOpen: false,
            modalProduct: detailProduct,
            cartSubTotal: 0,
            cartTax: 0,
            cartTotal: 0

        }
    }
    componentDidMount() {
        this.setProduct();
    }
    setProduct = () => {
        let tempProduct = [];
        storeProducts.forEach(item => {
            let singleItem = {...item};
            tempProduct = [...tempProduct, singleItem]
        });
        this.setState(() => {
            return{
                products: tempProduct
            }
        })

    }
    getItem = id => {
        return this.state.products.find(item => item.id === id);
    }
    handleDetails = id => {
        const product = this.getItem(id);
        this.setState(() => {
            return {
                detailProduct: product
            }
        })
    }
    addToCart = id => {
        const tempProduct = [...this.state.products];
        const index = tempProduct.indexOf(this.getItem(id));
        const product = tempProduct[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;

        this.setState(() => {
            return {
                products: tempProduct,
                cart: [...this.state.cart, product]
            }
        }, () => this.addTotals()
        )}
    openModal = id => {
        const product = this.getItem(id);
        this.setState(() => {
            return {
                modalProduct: product,
                modalOpen: true
            }
        })
    }
    closeModal = () => {
        this.setState(() => {
            return{
                modalOpen: false
            }
        })
    }
    increment = id => {
        let tempCart = [...this.state.cart];
        let selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count = product.count + 1;
        product.total = product.count * product.price;

        this.setState(() => {
            return {
                cart: [...tempCart]
            }
        }, () => {
            this.addTotals();
        })
    }
    decrement = id => {
        let tempCart = [...this.state.cart];
        let selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count = product.count -1;

        if(product.count === 0) {
            this.removedItem(id)
        }else {
            product.total = product.count * product.price;
            this.setState(() => {
                return {
                    cart: [...tempCart]
                }
            }, () => {
                this.addTotals();
            })
        }
    }
    removedItem = id => {
      let tempProducts = [...this.state.products]
       let tempCart = [...this.state.cart];
    
       tempCart = tempCart.filter(item => item.id !== id);
       const index = tempProducts.indexOf(this.getItem(id));
       let removedProduct = tempProducts[index];
       removedProduct.inCart = false;
       removedProduct.count = 0;
       removedProduct.total = 0;

       this.setState(() => {
           return {
               cart:[...tempCart],
               products: [...tempProducts]
           }
       }, () => {
           this.addTotals();
       })
    }
    clearCart = () => {
        this.setState(() => {
            return {
                cart: []
            }
        }, () => {
        this.setProduct();
        this.addTotals()})
    }
    addTotals = () => {
        let subTotal = 0;
        this.state.cart.map(item => (subTotal += item.total));
        const tempTax = subTotal * 0.1; 
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax
        this.setState(() => {
            return {
                cartSubTotal: subTotal,
                cartTax: tax,
                cartTotal: total
            }
        })
    }
    render() {
        return (
            <ProductContext.Provider value={
                {...this.state,
                handleDetails: this.handleDetails,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment: this.increment,
                decrement: this.decrement,
                removedItem: this.removedItem,
                clearCart: this.clearCart
            }
            }>
              {this.props.children}
            </ProductContext.Provider> 
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductConsumer, ProductProvider}
