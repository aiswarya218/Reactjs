import React from "react";
import { useParams } from "react-router-dom";

function User() {
    const { username } = useParams();

    return (
        <div>
            <h1>User Profile</h1>
            <p>Hello, <strong>{username}</strong>!</p>
        </div>
    );
}

export default User; 