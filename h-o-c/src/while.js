import React from "react";

function WhileLoopExample() {
    const items = [];
    let count = 5;

    while (count > 0) {
        items.push(<li key = {count}>Countdown: {count}</li>);
        count--;
    }

    return (
        <div>
            <h2>Using while loop</h2>
            <ul>{items}</ul>
        </div>
    );
}

export default WhileLoopExample;