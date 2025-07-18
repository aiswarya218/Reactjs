import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className = "navbar">
            <h1>DoorDash</h1>
            <div className = "links">
                <a href = "#">Sign In</a>
                <a href = "#" className = "signup">Sign Up</a>
            </div>
        </nav>
    );
};


export default Navbar;