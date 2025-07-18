import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <nav style = {{ marginBottom: 20 }}>
        <Link to= "/" style = {{ marginRight: 10 }}>Home</Link>
        <Link to = "/about" style = {{ marginRight: 10 }}>About</Link>
        <Link to = "/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/about" element = {<About />} />
        <Route path = "/contact" element = {<Contact />} />
      </Routes>
    </Router>
  );
};


export default App;


