import React from 'react';
import './Product.css';

const Product = (props) => {

    console.log(props.product);

    // Destructure Part For BONUS 

    const { name, img, price } = props.product;

    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <h2 className='product-name'>Name : {name}</h2>
            <h2 className='product-price'>Price : $ {price}/-</h2>
            <button className='product-button'><p>Add to Cart</p></button>

        </div>
    );
};

export default Product;