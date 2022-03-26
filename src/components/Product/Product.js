import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {

    // Destructure Part For BONUS 

    const { name, img, price } = props.product;

    const { handlerToAddCart } = props;

    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <h2 className='product-name'>Name : {name}</h2>
            <h2 className='product-price'>Price : $ {price}/-</h2>
            <button onClick={() => handlerToAddCart(props.product)} className='product-button'><p>Add to Cart</p>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>

        </div>
    );
};

export default Product;

{/* <FontAwesomeIcon icon="fa-solid fa-cart-plus" /> */}