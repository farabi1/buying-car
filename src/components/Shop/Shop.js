import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    return (
        <div className='shop-container'>
            <div className="product-container">
                <h2>Products : {products.length}</h2>
                <Product></Product>
            </div>
            <div className="cart-container">
                <Cart></Cart>
            </div>

        </div>
    );
};

export default Shop;