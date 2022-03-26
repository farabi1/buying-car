import React from 'react';
import './Cart.css';

const Cart = () => {
    return (
        <div className='cart-container'>
            <h1>Cart Part </h1>
            <button className='choose-button'><p className='choose-button-text' >Choose 1 For Me</p>
            </button>
            <button className='choose-button'><p className='choose-button-text' >Reset Cart</p>
            </button>
        </div>
    );
};

export default Cart;