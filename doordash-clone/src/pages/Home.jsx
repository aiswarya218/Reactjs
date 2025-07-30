import React from "react";
import Hero from "../components/Hero";
import RestaurantCard from "../components/RestaurantCard";
import restaurants from "../data/restaurants";

function Home() {
    return (
        <div>
            <Hero />
            <section className = "restaurant-section">
                <h2>Popular Restaurants</h2>
                <div className = "restaurant-list">
                    {restaurants.map((item) => (
                        <RestaurantCard key={item.id} restaurant = {item} />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Home;