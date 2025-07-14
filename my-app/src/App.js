import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setMessage(`Hello, ${name || 'Stranger'}! 👋`);
  };

  return (
    <div style={{ textAlign: 'center', padding: '30px' }}>
      <h1>Welcome to React!</h1>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: '8px', fontSize: '16px' }}
      />

      <br /><br />

      <button onClick={handleClick} style={{ padding: '10px 20px' }}>
        Greet Me
      </button>
      <h2>{message}</h2>
    </div>
  );
}

export default App;