import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
    <div style={{ padding: 20 }}>
      <h1>Reacter Router Full App</h1>
      <nav style={{ marginBottom: 20 }}>
        <Link to="/">Home</Link> |{""}
        <Link to="/about">About</Link> |{""}
        <Link to="/dashboard">Dashboard</Link>
        </nav>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />


      <Route path="dashboard" element={<Dashboard />}>
      <Route index element={<Navigate to="profile" replace />} />
      <Route path="profile" element={<Profile />} />
      <Route path="settings" element={<Settings />} />
      </Route>

      <Route path="*" element={<NotFound />} />   
      </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;