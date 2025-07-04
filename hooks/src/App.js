import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style = {{ textAlign : "center", padding : "50px" }}>
      <h1>🕒 Time on Page: {seconds} seconds</h1>
      <h2>🔢 Counter: {count}</h2>
      <button onClick = {() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
export default App;