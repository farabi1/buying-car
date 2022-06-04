import React, { useState } from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;

    // For Random Selection 
    // For Random Selection 

    const [random, setRandom] = useState([]);


    const randomCar = (cart) => {
        var randomItem = cart[Math.floor(Math.random() * cart.length)];
        const newRandom = [randomItem]
        setRandom(newRandom);
    }


    return (
        <div className='cart-container'>
            <h1>Cart Part </h1>

            <h3>Selected Item : {cart.length}</h3>

            {
                cart.map((item) => (
                    <h3 key={item.id}>{item.name}</h3>
                ))
            }


            <button onClick={randomCar} className='choose-button'><p className='choose-button-text' >Choose 1 For Me</p>
            </button>
            <button className='choose-button'><p className='choose-button-text' >Reset Cart</p>
            </button>
        </div>
    );
};

export default Cart;