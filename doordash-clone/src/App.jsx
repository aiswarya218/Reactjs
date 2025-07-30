import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import products from "./data/product";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <section className = "product-section">
        <h2>Trending Near You</h2>
        <div className = "product-list">
          {products.map((item, index) => (
            <ProductCard key = {index} item = {item} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;