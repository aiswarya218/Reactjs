import React from "react";
import "./Hero.css";

function Hero() {
    return (
        <div className = "hero">
            <h1>Discover the best food & drinks in your city</h1>
            <input type="text" placeholder="Enter your delivery address" />
        </div>
    );
}

export default Hero;