import React from "react";
import UserContext from "./UserContext";
import Parent from "./Parent";

function App() {
  const user = { name: "Ashina", role: "Student" };

  return (
    <UserContext.Provider value = {user}>
      <div style = {{ padding: "20px" }}>
        <h1>🎓 Context Without Prop Drilling</h1>
        <Parent />
        </div>
    </UserContext.Provider>
  )
}

export default App;