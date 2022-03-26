import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    console.log(cart);
    return (
        <div className='cart-container'>
            <h1>Cart Part </h1>

            <h3>Selected Item : {cart.length}</h3>
            <p>Selected Item :
                {
                    cart.map((item) => (
                        <h1>{item.name}</h1>
                    ))
                }
            </p>
            <button className='choose-button'><p className='choose-button-text' >Choose 1 For Me</p>
            </button>
            <button className='choose-button'><p className='choose-button-text' >Reset Cart</p>
            </button>
        </div>
    );
};

export default Cart;