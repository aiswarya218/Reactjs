import React from "react";
import withAuth from "./withAuth";
import Dashboard from "./Dashboard";

const ProtectedDashboard = withAuth(Dashboard);

function App() {
  const user = {
    name : "Aiswarya",
    isLoggedIn : false,
  };

  return (
    <div>
      <h1>My App</h1>
      <ProtectedDashboard name = {user.name} isLoggedIn = {user.isLoggedIn} />
    </div>
  );
}

export default App;