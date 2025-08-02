import React, { useEffect, useState } from 'react';
import ProductForm from './ProductForm';
import ProductList from './ProductList';
import CategoryFilter from './CategoryFilter';

function App() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("All");

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

  const filteredProducts = filter === "All"
     ? products
     : products.filter(p => p.category === filter);

  return (
    <div style = {{ padding: "2rem" }}>
      <h1> Product Catalogue </h1>
      <ProductForm addProduct={addProduct} />
      <CategoryFilter setFilter={setFilter} />
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;