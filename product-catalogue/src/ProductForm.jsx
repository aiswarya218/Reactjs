import React, { useState } from 'react';

function ProductForm({ addProduct }) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('Electronics');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !price) return;
        addProduct({ name, price: Number(price), category });
        setName('');
        setPrice('');
    };

    return (
        <form onSubmit = {handleSubmit}>
            <input 
               type = "text"
               placeholder = "Product name"
               value = {name}
               onChange = {e => setName(e.target.value)}
            />
            <input
               type = "number"
               placeholder = "Price"
               value = {price}
               onChange = {e => setPrice(e.target.value)}
            />
            <select value = {category} onChange = {e => setCategory(e.target.value)}>
                <option>Electronics</option>
                <option>Clothing</option>
                <option>Books</option>
            </select>
            <button type = "submit">Add</button>
        </form>
    );
}

export default ProductForm;