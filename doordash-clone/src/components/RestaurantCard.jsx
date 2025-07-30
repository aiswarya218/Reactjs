import React from "react";
import "./RestaurantCard.css";

function RestaurantCard({ restaurant }) {
  return (
    <div className = "card">
      <img src = {restaurant.image} alt = {restaurant.name} />
      <h3>{restaurant.name}</h3>
      <p>{restaurant.cuisine}</p>
      <p>{restaurant.rating} ⭐</p>
    </div>
  );
}

export default RestaurantCard;