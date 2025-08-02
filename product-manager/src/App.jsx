import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import ProductForm from './ProductForm';

function App() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const addProduct = (product) => {
    fetch("http://localhost:3001/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product)
    })
    .then(res => res.json())
    .then(newProduct => setProducts([...products, newProduct]));
  };

  const updateProduct = (updatedProduct) => {
    fetch(`http://localhost:3001/products/${updatedProduct.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedProduct)
    })
    .then(() => {
      setProducts(products.map(p => p.id === updatedProduct.id ? updatedProduct : p));
      setEditingProduct(null);
    });
  };

  const deleteProduct = (id) => {
    fetch(`http://localhost:3001//products/${id}`, {
      method: "DELETE"
    })
    .then(() => {
      setProducts(products.filter(p => p.id !== id));
    })
  };

    return (
      <div style = {{ padding: "2rem" }}>
        <h1> 📦 Product Manager</h1>
        <ProductForm 
           addProduct = {addProduct}
           editingProduct = {editingProduct}
           updateProduct = {updateProduct}
           />
          <ProductList  
          products = {products}
          onEdit = {setEditingProduct}
          onDelete = {deleteProduct}
          />
      </div>
    );
  }
export default App;