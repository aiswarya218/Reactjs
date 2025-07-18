import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Dashboards = () => {
    return (
        <div>
            <h2>Dashboard</h2>
            <nav>
                <Link to = "profile" style = {{ marginRight: 10 }}>Profile</Link>
                <Link to = "settings">Settings</Link>
            </nav>

            <hr />

            <Outlet />
        </div>
    );
};

export default Dashboards;