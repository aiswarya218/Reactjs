import React from "react";

function Navbar() {
    return (
        <nav className = "navbar">
            <div className = "logo">Doordash</div>
            <ul className = "nav-links">
                <li>Sign In</li>
                <li>Sign Up</li>
            </ul>
        </nav>
    );
}

export default Navbar;