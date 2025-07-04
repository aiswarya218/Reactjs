// import React from "react";
// import withAuth from "./withAuth";
// import Dashboard from "./Dashboard";

// const ProtectedDashboard = withAuth(Dashboard);

// function App() {
//   const user = {
//     name : "Aiswarya",
//     isLoggedIn : false,
//   };

//   return (
//     <div>
//       <h1>My App</h1>
//       <ProtectedDashboard name = {user.name} isLoggedIn = {user.isLoggedIn} />
//     </div>
//   );
// }

// export default App;



// //useState

// import React, { useState } from 'react';

// function Counter() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button onClick = {() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// }

// //useEffect

// import React, { useEffect, useState } from 'react';

// function Timer() {
//   const [seconds, setSeconds] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setSeconds((prev) => prev + 1);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return <p>Timer: {seconds} seconds</p>;
// }


// import React, { useState, useEffect } from "react";

// function App() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     fetch("http://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((data) => {
//       setUsers(data);
//       setLoading(false);
//     })
//     .catch((err) => {
//       console.error("Error fetching users:", err);
//       setLoading(false);
//     });
//   }, []);

//   const filteredUsers = users.filter((user) =>
//        user.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div style = {{ padding : "20px" }}>
//       <h1>👤 User List with Search</h1>

//       <input type = "text"
//       placeholder = "Search by name..."
//       value = {search}   onChange = {(e) => setSearch(e.target.value)}
//       style = {{
//           padding : "8px",
//           marginBottom : "20px",
//           width : "250px",
//       }}
//       />

//       {loading ? (
//         <p>Loading users....</p>
//       ) : filteredUsers.length > 0 ? (
//         <ul>
//           {filteredUsers.map((user) => (
//             <li key = {user.id}>
//               <strong>{user.name}</strong> - {user.email}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No users found.</p>
//       )}
//       </div>
//   );
// }

// export default App;



import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts : []
    }
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      console.log(response)
      this.setState({posts: response.data})
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    return (
      <div>
        Lists of posts
        {
          posts.length ?
          posts.map(post => <div key = {post.id} > {post.title}</div>) :
          null
        }
      </div>
    )
  }
}

export default PostList