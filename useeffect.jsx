import React, { useState, useEffect } from 'react';
import { useLinkClickHandler } from 'react-router-dom';
import { jsx } from 'react/jsx-runtime';
//import { jsx } from 'react/jsx-showtime';

function AllInOneExample() {
    const [count, setCount] = useState(0);
    const [data, setData] = useState([]);
    const [isTimerActive, setIsTimerActive] = useState(true);

    useEffect(() => {
        console.log("Component mounted - fetching data");
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((json) => setData(json));

        return () => {
            console.log("Component unmounted");
        };
    }, []);


    useEffect(() => {
        console.log(`Count updated to: ${count}`);
    }, [count]);

    useEffect(() => {
        let interval;
        if (isTimerActive) {
            interval = setInterval(() => {
                setCount((prev) => prev + 1);
            }, 1000);
        }

        return () => {
            clearInterval(interval);
            console.log("Timer stopped/cleaned");
        };
    }, [isTimerActive]);

    return (
        <div>
            <h1>All useeffect</h1>
            <h2>Count: {count}</h2>
            <button onClick = {() => setIsTimerActive(!isTimerActive)}>
                {isTimerActive ? 'Pause Timer' : 'Start Timer'}
            </button>

            <h2>Fetched Users:</h2>
            <ul>
                {data.map((user) => (
                    <li key = {user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default AllInOneExample;