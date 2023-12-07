import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import Orders from '../Orders/Orders';

const Shop = () => {
    // State to manage the product list
    const [products, setProducts] = useState([]);

    // Fetch product data from JSON file when the component mounts
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    // State to manage the cart items
    const [cart, setCart] = useState([]);

    // Function to add a product to the cart
    const handleAddToCart = (product) => {
        // Add the selected product to the cart
        const newCart = [...cart, product];
        setCart(newCart);

        // Add the product ID to the local storage (simulate cart persistence)
        addToDb(product.id);
    }

    // Retrieve cart data from local storage when the component mounts
    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];

        // Loop through the stored cart items and retrieve the corresponding product details
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);

            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }

        // Set the cart state with the retrieved cart items
        setCart(savedCart);
    }, [products]);

    // Function to clear the cart
    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            {/* Display products */}
            <div className="products-container">
                {products.map(product =>
                    <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    />
                )}
            </div>

            {/* Display the cart */}
            <div className="cart-container">
                <Cart
                    cart={cart}
                    handleClearCart={handleClearCart}
                />
            </div>
        </div>
    );
};

export default Shop;
