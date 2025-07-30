import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
  };

  const decrement = () => {
    setCount(prev => prev - 1);
  };

  return (
    <div style = {{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Simple Counter</h1>
      <h2>Count: {count}</h2>
      <button onClick = {decrement}>-</button>
      <button onClick = {increment}>+</button>
    </div>
  );
}

export default App;