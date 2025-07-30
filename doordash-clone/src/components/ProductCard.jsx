import React from "react";

function ProductCard({ item }) {
    return (
        <div className = "product-card">
          <img src = {item.image} alt = {item.name} />
          <h3>{item.name}</h3>
          <p>{item.type}</p>
        </div>
    );
}

export default ProductCard;