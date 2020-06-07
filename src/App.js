import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import { Route, Switch } from "react-router-dom";
import Default from "./components/Default";
import Carts from "./components/Cart";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/details" exact component={Details} />
          <Route path="/cart" component={Carts} />
          <Route component={Default} exact />
        </Switch>
        <Modal />
        <Footer />
      </>
    );
  }
}

export default App;
