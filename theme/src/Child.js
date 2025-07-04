import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

function Child() {
    const { theme, setTheme } = useContext(ThemeContext);

const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
}

    return (
        <div>
            <p>Current Theme: <strong>{theme}</strong></p>
            <button onClick = {toggleTheme}>
                Toggle Theme
            </button>
        </div>
    );
 }

 export default Child;


 import React, { useContext } from 'react';
 import ThemeContext from './ThemeContext';

 