import React from 'react';

export function Card({ children, className = '' }) {
    return (
        <div className = {`bg-white rounded shadow-sm overflow-hidden ${className}`}>
            {children}
        </div>
    );
}

export function CardContent({ children, className = '' }) {
    return (
        <div className = {`p-4 ${className}`}>
            {children}
        </div>
    );
}