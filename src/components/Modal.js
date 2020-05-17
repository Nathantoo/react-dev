import React, { Component } from 'react';
import {ProductConsumer} from '../Context';
import {Link} from 'react-router-dom';

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const {openModal, closeModal, modalOpen} = value;
                    const {img, title, price} = value.modalProduct;

                    if(!modalOpen) {
                        return null
                    }
                    else {
                        return(
                        <div className='modalContainer'>
                           <div className='container'>
                            <div className='row'>
                                <div id='modal' className='col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5'>
                                    <h5>Item add to the Cart</h5>
                                    <img src={img} alt='product' className='img-fluid' />
                                    <h5>{title}</h5>
                                    <h5 className='text-muted'>Price : {price}<sup>$</sup></h5>
                                    <Link to='/'>
                                        <button className='details-btn' 
                                        onClick={() => closeModal()}>
                                            continue shopping
                                        </button>
                                    </Link>
                                    <Link to='/cart'>
                                        <button className='add-btn ml-3 ' 
                                        onClick={() => closeModal()}>
                                            go to cart
                                        </button>
                                    </Link>

                                </div>
                            </div>
                           </div>
                        </div>)
                    }
                }}
                
            </ProductConsumer>
        )
    }
}
