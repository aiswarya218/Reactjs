import React from "react";

function Hero() {
    return (
        <section className = "hero">
            <h1>Order food and groceries online from the best restaurants</h1>
            <input className = "seachinput" type = "text" placeholder = "Enter your delivery address" />
            <button className = "hero-btn">Find Food</button>
        </section>
    );
}

export default Hero;