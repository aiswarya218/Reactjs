import React from 'react';

export function Button({ children, className = '', variant = 'default', ...props }) {
    const base = 'inline-flex items-center px-4 py-2 text-sm font-medium rounded focus:outline-none';
    const variants = {
        default: 'bg-red-500 text-white hover:bg-red-600',
        outline: 'border border-red-500 text-red-500 hover:bg-red-100',
        secondary: 'bg-gary-200 text-gray-800 hover:bg-gray-300'
    };

    return (
        <button className = {`${base} ${variants[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
}