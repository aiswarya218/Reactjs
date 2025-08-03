import React from 'react';

function CategoryFilter({ setFilter }) {
    return (
        <div style = {{ margin: "1rem 0" }}>
            <label>Filter by Category: </label>
            <select onChange = {(e) => setFilter(e.target.value)}>
                <option>All</option>
                <option>Electronics</option>
                <option>Clothing</option>
                <option>Books</option>
            </select>
        </div>
    );
}

export default CategoryFilter;