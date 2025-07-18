import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className = "hero">
            <h1>Discover restaurants and more near you</h1>
            <input type = "text" placeholder = "Enter delivery address" />
            <button>Find food</button>
        </section>
    );
};

export default Hero;