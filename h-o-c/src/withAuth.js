import React from "react";

function withAuth(WrappedComponent) {
    return function ProtectedComponent(props) {
        const isLoggedIn = props.isLoggedIn;

        if (!isLoggedIn) {
            return <h3>Access denied. Please login first.</h3>
        }

        return <WrappedComponent {...props} />;
    };
}

export default withAuth;