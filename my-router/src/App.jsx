import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';

function App() {
    return (
        <div>
            <nav>
            <Link to = "/">🏡 Home</Link> |{" "}
            <Link to = "/profile/101">👤 Profile 101</Link>
            <Link to = "/profile/202">👤 Profile 202</Link>
            </nav>
            
            <Routes>
                <Route path = "/" element={<Home />} />
                <Route path = "/profile/:id" element = {<Profile />} />
            </Routes>
              <div style = {{ padding: "20px", fontFamily: "Arial"}}></div>
        </div>

    );
}

export default App;