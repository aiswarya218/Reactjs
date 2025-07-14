import React, { useContext } from "react";
import UserContext from "./UserContext";

function Dashboard() {
    const { user, login, logout } = useContext(UserContext);

    return (
        <div>
            {user ? (
                <>
                <p>Welcome, <strong>{user.name}</strong>!</p>
                <p>Email : {user.email}</p>
                <button onClick = {logout}>Logout</button>
                </>
            ) : (
                 <>
                 <p>No user logged in.</p>
                 <button onClick = {login}>Login</button>
                 </>
            )}
        </div>
    );
}


export default Dashboard;