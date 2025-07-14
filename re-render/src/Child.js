import React from 'react';
import { jsx } from 'react/jsx-runtime';

const Child = React.memo(({ onClick }) => {
    console.log('🔄 Child rendered');

    return (
        <div>
            <h2>I'm the Child Component</h2>
            <button onClick = {onClick}>Child Button</button>
        </div>
    );
});

export default Child;