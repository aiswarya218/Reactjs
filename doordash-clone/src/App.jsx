import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import RestaurantCard from "./components/RestaurantCard";
import Home from "./data/restaurants";
import restaurants from "./data/restaurants";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <section className = "restaurant-section">
        <h2>Popular Restaurants</h2>
        <div className = "restaurant-list">
          {restaurants.map((res) => (
            <RestaurantCard key = {res.id} restaurant = {res} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;