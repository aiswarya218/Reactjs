import React, { useEffect, useState } from 'react';
import { jsx } from 'react/jsx-runtime';
import { LCPThresholds } from 'web-vitals';

function Example() {
     const [data, setData] = useState([]);

     useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setData(data.slice(0, 5)));
     }, []);

     return (
        <div>
            <h2>Posts</h2>
            <ul>
                {data.map(post => (
                    <li key = {post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
     );    
}