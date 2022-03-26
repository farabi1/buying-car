import React from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    return (
        <div>
            <h1>Shop Part</h1>
            <Product></Product>
            <Cart></Cart>
        </div>
    );
};

export default Shop;