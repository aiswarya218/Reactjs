import React from "react";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className = "navbar">
            <div className = "logo">DoorDash</div>
            <input type="text" placeholder = "Search for food or restaurants" />
            <div className = "auth">
                <button>Sign In</button>
                <button>Sign Up</button>
            </div>
        </nav>
    );
}

export default Navbar;