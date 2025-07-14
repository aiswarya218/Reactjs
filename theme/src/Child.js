//context

import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';
import { jsx } from 'react/jsx-runtime';

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