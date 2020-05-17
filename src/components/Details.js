import React, { Component } from 'react';
import {ProductConsumer} from '../Context';
import {Link} from 'react-router-dom';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                 const {id,company,img,info,price,title,inCart} =  value.detailProduct;
                 return (
                     <div className='container p-5'>
                         {/*title */}
                         <div className='row'>
                            <div className='col-10 mx-auto text-center text-blue my-5'>
                            <h1>{title}</h1>
                            </div>
                         </div>
                         {/*end title */}
                         {/*product info */}
                         <div className='row'>
                            <div className='col-10 mx-auto col-md-6 my-3'>
                               <img src={img} className='img-fluid' alt='product'/>
                            </div>
                            <div className='col-10 mx-auto col-md-6 text-capitalize my-3'>
                              <h2>Model: {title}</h2>
                              <h4 className='text-title text-uppercase text-muted mt-3 mb-2'>
                                  Made by: <span className='text-uppercase'>{company}</span>
                              </h4>
                              <h4 className='text-blue'>
                                <strong>
                                    Price: {price}<sup className='ml-1'>$</sup>
                                </strong>
                              </h4>
                              <h5 className='text-capitalize font-weight-bold mt-3 mb-0'>
                                  some info abaut the product:
                              </h5>
                              <p className='text-muted lead'>
                                  {info}
                              </p>
                              <div>
                                  <Link to='/'>
                                      <button className='details-btn'>back to product</button>
                                  </Link>
                                  <button 
                                    disabled={inCart ? true : false}
                                    className='text-capitalize add-btn ml-3'
                                    onClick={() => {value.addToCart(id);
                                                value.openModal(id)}}>
                                     {
                                         inCart ? 'in Cart' : 'Add To Cart'
                                     }
                                  </button>
                              </div>
                            </div>
                         </div>
                     </div>
                 )
                }}
            </ProductConsumer>
        )
    }
}
