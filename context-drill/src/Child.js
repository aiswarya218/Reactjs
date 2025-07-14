import React from "react";
import GrandChild from "./GrandChild";

function Child() {
    return (
        <div>
            <h3>Child Component</h3>
            <GrandChild />
        </div>
    );
}

export default Child;