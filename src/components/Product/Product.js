import React from 'react';
import './Product.css';

const Product = (props) => {

    console.log(props.product);

    // Destructure Part For BONUS 

    const { name, img, price } = props.product;

    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <h2>Name : {name}</h2>
            <h2>Price : {price}</h2>

        </div>
    );
};

export default Product;