import React, { useState } from 'react';
import ThemeContext from './ThemeContext';
import Child from './Child';

function App() {
  const [theme, setTheme] = useState('light');

  const appStyle = {
    backgroundColor: theme === 'light' ? '#ffffff' : '#1a1a1a',
    color : theme === 'light' ? '#000000' : '#ffffff',
    minHeight : '100vh',
    padding : '20px',
    transition : 'all 0.3s ease',
  };

  return (
    <ThemeContext.Provider value = {{ theme, setTheme }}>
      <div style = {appStyle}>
        <h2>🌗 Theme App</h2>
        <Child />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;



// import React, { useEffect, useState } from "react";

// function App() {
//   const [data, setData] = useState([]);
//   const [newPost, setNewPost] = useState("");

//   useEffect(() =>  { 
//     fetch("http://jsonplaceholder.typicode.com/posts?_limit=5")
//     .then((res) => res.json())
//     .then((data) => setData(data));
// }, []);

// const handleAddPost = () => {
//   fetch("http://jsonplaceholder.typicode.com/posts", {
//     method : "POST",
//     headers : { "Content-Type"  : "application/json" },
//     body : JSON.stringify({
//       title : newPost,
//       body : "This is a test post",
//       userId : 1,
//     }),
//   })
//   .then((res) => res.json())
//   .then((post) => {
//     setData([post, ...data]);
//     setNewPost("");
//   });
// };

// return (
//   < div style = {{ padding : "20px" }}>
//     <h2> Posts </h2>
//     <input  type = "text"  value = {newPost} onChange = {(e) => setNewPost(e.target.value)}
//     placeholder = "Enter post title"
//     />
//     <button onClick = {handleAddPost}>Add Post</button>

//     <ul>
//       {data.map((post) => (
//         <li key = {post.id}>{post.title}</li>
//       ))}
//     </ul>
//   </div>
// );
// }

// export default App;