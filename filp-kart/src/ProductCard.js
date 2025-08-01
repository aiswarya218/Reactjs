import React from 'react';
import './App.css';

function ProductCard({ product }) {
    return (
        <div className = "product-card">
            <div className = "discount-badge">{product.discount}</div>
            <img src = {product.image} alt = {product.name} />
            <h3>{product.name}</h3>
            <p className = "price">{product.price}</p>
            <button>Add to Cart</button>
        </div>
    );
}

export default ProductCard;