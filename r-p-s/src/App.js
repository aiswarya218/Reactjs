import React, { useEffect, useState } from 'react';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => {
      setUsers(data);
      setloading(false);
    })
    
    .catch((error) => {
      console.error('Error fetching data:', error);
      setloading(false);
    });
  },[]);

  if (loading) {
    return <p>Loading users...</p>;
  }

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
           <li key = {user.id}>
            <strong>{user.name}</strong>  ({user.email})
           </li>
        ))}
      </ul>
    </div>
  );
};

export default App;