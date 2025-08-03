import React from 'react';

function ProductList({ products }) {
    return (
        <ul>
            {products.map(p => (
                <li key = {p.id}>
                    <strong>{p.name}</strong> - ₹{p.price} ({p.category})
                </li>
            ))}
        </ul>
    );
}

export default ProductList;