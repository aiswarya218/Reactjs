import React, { useState, useEffect } from 'react';

function Timer() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("  Timer started");

        const interval = setInterval(() => {
            setCount(prev => prev + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
            console.log("  Timer cleaned up (interval cleared)");
        };
    }, []);

    return (
        <div style = {{ marginTop: '20px' }}>
            <h2>Seconds Passed: {count}</h2>
        </div>
    );
}

export default Timer;