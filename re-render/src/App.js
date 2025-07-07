import React, { useState, useCallback } from 'react';
import Child from './Child';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const increment = () => setCount(prev => prev + 1);
  
  const handleClick = useCallback(() => {
    console.log('Child button clicked');
  }, []);

  return (
    <div style = {{ textAlign: 'center',padding: '20px' }}>
      <h1>Parent Count: {count}</h1>
      <button onClick = {increment}>Increment Parent</button>

      <br /> <br />
      <input 
      placeholder = "Type something"
      value = {text}
      onChange = {e => setText(e.target.value)}
      />

      <Child onClick = {handleClick} />
    </div>
  );
}

export default App;


