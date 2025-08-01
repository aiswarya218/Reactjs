import React, { useState, useMemo, useCallback } from 'react';

function ExpensiveComponent({ onClick }) {
    console.log("Rendering ExpensiveComponent");
    return <button onClick = {onClick}>Click Me</button>;
}

function MemoDemo() {
    const [count, setCount] = useState(0);
    const [other, setOther] = useState(0);

    const expensiveValue = useMemo(() => {
        console.log("Calculating expensive value...");
        let result = 0;
        for (let i = 0; i < 100000000; i++) {
            result += i % 10;
        }
        return result; 
    }, [count]);

    const handleClick = useCallback(() => {
        console.log(`Clicked! Current count: ${count}`);
    }, [count]);


    return (
        <div>
            <h2>UseMemo and UseCallback</h2>
            <p>Expensive Value: {expensiveValue}</p>
            <p>Count: {count}</p>
            <button onClick = {() => setCount(count + 1)}>Increment Count</button>

            <p>Other State: {other} </p>
                <button onClick = {() => setOther(other + 1)}>Increment Other</button>

                <ExpensiveComponent onClick = {handleClick} />
        </div>
    );
}

export default MemoDemo;