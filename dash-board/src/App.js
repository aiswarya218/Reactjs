import React, { useState } from "react";
import UserContext from "./UserContext";
import Dashboard from "./Dashboard";

function App() {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({ name: "Anzika", email: "anzi134@gmail.com" });
  };

  const logout = () => {
  setUser(null);
};


  return (
    <UserContext.Provider value = {{ user, login, logout}}>
      <div style = {{ padding : "20px" }}>
        <h1> 👤 User Context Example </h1>
        <Dashboard />
      </div>
    </UserContext.Provider>
  );
}

export default App;
