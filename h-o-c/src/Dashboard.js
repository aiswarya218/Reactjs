import React from "react";
import { jsx } from "react/jsx-runtime";

function Dashboard(props) {
    return<h2>Welcome to your dashboard, {props.name}!</h2>;
}

export default Dashboard;