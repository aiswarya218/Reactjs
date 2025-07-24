import React from "react";

function ForLoopExample() {
    const numbers = [];
    for (let i = 1; i <= 5; i++) {
        numbers.push(<li key = {i}>Number {i}</li>);
    }

    return (
        <div>
            <h2>Using for loop</h2>
            <ul>{numbers}</ul>
        </div>
    );
}

export default ForLoopExample;