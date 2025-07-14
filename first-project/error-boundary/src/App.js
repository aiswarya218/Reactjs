import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import BuggyComponent from "./BuggyComponent";

function App() {
  return (
    <div>
      <h1>MY APP</h1>
      <ErrorBoundary>s
        <BuggyComponent />
      </ErrorBoundary>
    </div>
  );
}

export default App;

