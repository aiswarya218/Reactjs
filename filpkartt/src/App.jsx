import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../../dynamic-routes/src/Home";
import User from "../../dynamic-routes/src/User";

function App() {
    return (
        <Router>
            <nav>
                <Link to = "/">Home</Link>
                <Link to = "/user/ami">User: Ami</Link>
                <Link to = "/user/john">User: John</Link>
            </nav>
            
            <Routes>
                <Route path = "/" element = {<Home />} />
                <Route path = "/user/:username" element = {<User />} />
            </Routes>
        </Router>
    );
}

export default App;