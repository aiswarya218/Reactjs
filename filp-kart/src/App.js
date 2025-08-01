import React from 'react';
import './App.css';
import products from './data';
import ProductCard from './ProductCard';


function App() {
  return (
    <div className = "App">
      <header>
        <div className = "logo">Filpkart
        </div>
      </header>

      <section className = "product-section">
        <h2>Top Deals</h2>
        <div className = "products">
          {products.map(product => (
            <ProductCard key = {product.id} product = {product} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;