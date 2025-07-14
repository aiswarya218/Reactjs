import React, { useEffect, useState } from 'react';

function FunctionalComponent() {
    const [count, setCount] = useState(0);

    console.log('Functional: render');

    useEffect(() => {
        console.log('Functional: componentDidMount');
        return () => {
            console.log('Functional : componentWillUnmount');
        };
    }, []);


    useEffect(() => {
        console.log('Functional : componentDidUpdate');
    }, [count]);

    return (
        <div>
            <p>Count : {count}</p>
            <button onClick = {() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default FunctionalComponent;