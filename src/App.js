import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';

class App extends Component {
  render() {
    return(
    <React.Fragment>
      <Navbar />
      <Switch>
      <Route path='/' component={ProductList} exact/>
      <Route path='/details' component={Details} exact strict/>
      <Route path='/cart' component={Cart} exact strict/>
      <Route component={Default} exact strict/>
      </Switch>
      <Modal />
    </React.Fragment>
    )
  }
}

export default App;
