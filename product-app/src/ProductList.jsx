import React, { useState, useMemo, useCallback } from 'react';
import './App.css';

const products = [
    { id: 1, name: '💻Laptop', category: 'Electronics' },
    { id: 2, name: '👕Shirt', category: 'Clothing' },
    { id: 3, name: '📱Mobile', category: 'Electronics' },
    { id: 4, name: '👖Jeans', category: 'Clothing' },
    { id: 5, name: '⌚Watch', category: 'Accessories' },
];

const ProductItem = React.memo(({ product, onBuy }) => {
    console.log(`Rendering ${product.name}`);
    return (
        <li className = "product-item">
            <span>{product.name} - <em>{product.category}</em></span>
            <button onClick = {() => onBuy(product.id)}>Buy</button>
        </li>
    );
});

function ProductList() {
    const [search, setSearch] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');
    const [cart, setCart] = useState([]);

    const filteredProducts = useMemo(() => {
        console.log("Filtering products...");
        return products.filter((product) => {
            return (
                product.name.toLowerCase().includes(search.toLowerCase()) &&
                (categoryFilter ? product.category === categoryFilter : true)
            );
        });
      },  [search, categoryFilter]);

      const handleBuy = useCallback(
        (productId) => {
            setCart((prev) => [...prev, productId]);
        },
        []
      );

      return (
        <div className = "container">
            <h2>🛍️ Product List</h2>

            <div className = "filters">
                <input
                type = "text"
                placeholder = "Search products..."
                value = {search}
                onChange = {(e) => setSearch(e.target.value)}
                />

                <select
                value = {categoryFilter}
                onChange = {(e) => setCategoryFilter(e.target.value)}
                >
                    <option value ="">All Categories</option>
                    <option value ="Electronics">Electronics</option>
                    <option value ="Clothing">Clothing</option>
                    <option value ="Accessories">Accessories</option>
                </select>
            </div>

            <ul className = "product-list">
                {filteredProducts.map((product) => (
                    <ProductItem key = {product.id} product = {product} onBuy = {handleBuy} />
                ))}
            </ul>

            <h3>🛒 Cart: {cart.length} item(s)</h3>
        </div>
      );
    }
    
    export default ProductList;