import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Filters from "./components/Filters";
import Products from "./components/Products";
import Footer from "./components/Footer";
import "./style1.css";

function App() {
  return (
    <div>
      <Header />
      <Navbar />

      <div className="main-content">
        <Filters />
        <Products />
      </div>

      <Footer />
    </div>
  );
}

export default App;