//INTERVAL WITH CLEANUP

import React, { useState, useEffect } from 'react';

function Timer() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prev => prev + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
            console.log("Interval cleared");
        };
    }, []);

    return <h2>Count: {count}</h2>;
}


//EVENT LISTENER WITH CLEANUP

useEffect(() => {
    const handleResize = () => {
        console.log('Window resized:', window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
        console.log('Removed event listener');
    };
}, []);