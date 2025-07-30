// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import User from "./User";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/user/ami">User: Ami</Link> | 
        <Link to="/user/john">User: John</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:username" element={<User />} />
      </Routes>
    </Router>
  );
}

export default App;