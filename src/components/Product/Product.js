import React from 'react';
import './Product.css';

const Product = (props) => {

    console.log(props.product);

    // Destructure Part For BONUS 

    const  {name, image, price} = props.product;

    return (
        <div className='product'>
            
        </div>
    );
};

export default Product;