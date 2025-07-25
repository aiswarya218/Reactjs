import React from 'react';

function CatCard({ image, fact }) {
    return (
        <div className = "cat-card">
            {image && <img src = {image} alt="Cat" />}
            <p className = "fact"> 🧠 {fact}</p>
        </div>
    );
}

export default CatCard;