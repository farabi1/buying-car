import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handlerToAddCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    // BONUS PART 


    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product key={product.id} product={product} handlerToAddCart={handlerToAddCart}></Product>)
                }
            </div>
            <div className="cart-container">

                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;  