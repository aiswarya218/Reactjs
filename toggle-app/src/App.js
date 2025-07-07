import React, { useState, createContext } from 'react';
import Counter from './Counter';
import Clock from './Clock';

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
     setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value = {theme}>
      <div className = {`app ${theme}`}>
        <h1> 🌗 Theme Toggle + Counter + Clock</h1>
        <button onClick = {toggleTheme}>Toggle Theme</button>
        <Counter />
        <Clock />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;