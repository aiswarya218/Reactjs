import React, { useState } from 'react';
import './App.css';

function App() {
  const [bgColor, setBgColor] = useState('#ffffff');

  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    setBgColor(color);
  };

  return (
    <div className = "App" style = {{ backgroundColor : bgColor, height : '100vh' }}>
    <h1>Color Changer App</h1>
    <p>Click the button to change background color</p>
    <button onClick = {generateRandomColor}>Change Color</button>
    <p>Current Color : {bgColor}</p>
    </div>
    );
}

export default App;
