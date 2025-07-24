import React, { useContext } from 'react';
import FruitContext from './FruitContext';

function FruitList() {
    const { fruits } = useContext(FruitContext);

    if (fruits.length === 0) return <p>No fruits found.</p>;

    return (
        <ul>
            {fruits.map((fruit, idx) => (
                <li key = {idx}>{fruit}</li>
            ))}
        </ul>
    );
}

export default FruitList;