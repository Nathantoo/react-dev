import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../Context';
import PropTypes from 'prop-types'

export default class Product extends Component {
    render() {
        const {id,title,img,price,inCart,} = this.props.product
        return (
            <div className='col-9 mx-auto col-sm-6 col-lg-3 my-3'>
                <div className='card'>
                    <ProductConsumer>
                        {value => (
                            <div className='img-container p-5'
                            onClick={() => value.handleDetails(id)}>
                            <Link to='/details'>
                                <img src={img} alt='product' className='card-img-top'/>
                            </Link>
                            <button 
                            className='card-btn'
                            disabled={inCart ? true : false}
                            onClick={
                                () => {value.addToCart(id);
                                      value.openModal(id)}}>
                                {inCart ? (<p className='text-capitalize mb-0' disabled>in cart</p>) : 
                                 (<i className='fas fa-cart-plus'></i>)}
                            </button>
                        </div>
                        )}
                    </ProductConsumer>
                    <div className='card-footer d-flex justify-content-between'>
                        <p className='align-self-center mb-0'>
                            {title}
                        </p>
                        <h5 className='text-blue mb-0 font-italic'>
                            <span className='mr-1'>$</span>
                            {price}
                        </h5>
                    </div>
                </div>
            </div>
        )
    }
}

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        price: PropTypes.number,
        img: PropTypes.string,
        inCart: PropTypes.bool
    }).isRequired
}