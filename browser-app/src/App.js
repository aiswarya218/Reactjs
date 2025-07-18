import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboards from './pages/Dashboards';
import Profile from './pages/dashboard/Profile';
import Settings from './pages/dashboard/Settings';

const App = () => {
  return (
    <Router>
      <nav style = {{ marginBottom: 20 }}>
        <Link to = "/dashboard" style = {{ marginRight: 10 }}>Dashboard</Link>
      </nav>

      <Routes>
        <Route path = "/dashboard" element = {<Dashboards />}>
        <Route path = "profile" element = {<Profile />} />
        <Route path = "settings" element = {<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;