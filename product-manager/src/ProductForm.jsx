import React, { useState, useEffect } from 'react';

function ProductForm({ addProduct, editingProduct, updateProduct }) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    useEffect(() => {
        if (editingProduct) {
            setName(editingProduct.name);
            setPrice(editingProduct.price);
        }
    }, [editingProduct]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !price) return;

    const product = { name, price: Number(price) };
        if (editingProduct) {
            updateProduct({ ...editingProduct, ...product });
        }
        else {
            addProduct(product);
        }

        setName('');
        setPrice('');
    };

    return (
        <form onSubmit = {handleSubmit} style = {{ marginBottom: "2rem" }}>
            <input
               type = "text"
               placeholder = "Product Name"
               value = {name}
               onChange = {e => setName(e.target.value)}
            />
            <input 
               type = "number"
               placeholder = "Price"
               value = {price}
               onChange = {e => setPrice(e.target.value)}
            />
            <button type = "submit">{editingProduct ? "Update" : "Add"} Product</button>
        </form>
    );
}

export default ProductForm;