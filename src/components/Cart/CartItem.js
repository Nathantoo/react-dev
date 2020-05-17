import React from 'react'

export default function CartItem({item, value}) {
    const {id,img,price,title,total,count} = item;
    const {increment, decrement, removedItem} = value;
    return (
        <div className='row text-capitalize text-center my-2'>
            <div className='col-10 mx-auto col-lg-2'>
               <img src={img} 
               className='img-fluid' 
               style={{width: "5rem", height: "5rem"}}
               alt='product'/>
            </div>
            <div className='col-10 mx-auto col-lg-2'>
                <span className='d-lg-none'>Product: </span>
                {title}
            </div>
            <div className='col-10 mx-auto col-lg-2'>
                <span className='d-lg-none'>Price: </span>
                {price}
            </div>
            <div className='col-10 mx-auto col-lg-2 my-2 my-lg-0'>
                <div className='d-flex justify-content-center'>
                    <div>
                        <span className='btn btn-black mx-1'
                        onClick={() => decrement(id)}><i className='fas fa-minus'></i></span>
                        <span className='btn btn-count mx-1'>{count}</span>
                        <span className='btn btn-black mx-1'
                        onClick={() => increment(id)}><i className='fas fa-plus'></i></span>
                    </div>
                </div>
            </div>
            <div className='col-10 mx-auto col-lg-2'>
               <div className='cart-icon' >
                   <i className='fas fa-trash'  onClick={() => removedItem(id)}></i>
               </div>
            </div>  
            <div className='col-10 mx-auto col-lg-2'>
                <strong className='d-lg-none'>Items Total: {total}</strong>
                {total}
            </div>  
        </div>
    )
}
