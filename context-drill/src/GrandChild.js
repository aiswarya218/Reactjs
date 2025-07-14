import React, { useContext } from "react";
import UserContext from "./UserContext";

function GrandChild() {
    const user = useContext(UserContext);

    return (
        <div>
            <h4>GrandChild Component</h4>
            <p>User: {user.name}</p>
            <p>Role: {user.role}</p>
        </div>
    );
}

export default GrandChild;