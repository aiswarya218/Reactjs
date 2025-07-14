import React, { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({
      title : "",
      body : "",
  });

  useEffect(() => {
    fetch("http://jsonplaceholder.typicode/posts?_limit=5")
       .then((res) => res.json())
       .then((data) => setPosts(data))
       .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  const handleAddPost = () => {
    fetch("http://jsonplaceholder.typicode.com/posts", {
      method : "POST",
      headers : {
        "Content-Type": "application/json",
      },
      body : JSON.stringify(newPost),
    })
    .then((res) => res.json())
    .then((data) => {
      console.log("Post created:", data);
      setPosts([data, ...posts]);
      setNewPost({ title : "", body : ""});
    })
    .catch((err) => console.error("Error creating post:", err));
  };

  return (
    <div style = {{ padding: "20px" }}>
      <h2>📰 Posts</h2>
      {posts.map((post) => (
        <div key = {post.id} style = {{ marginBottom: "10px", border: "1px solid #ccc", padding: "10px" }}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
          </div>
      ))}

      <hr />

      <h3>Create New Post</h3>
      <input type = "text"  placeholder = "Title"  value = {newPost.title}  onChange = {(e) => setNewPost({ ...newPost, title: e.target.value })}
        style = {{ width: "100%", padding : "8px", marginBottom : "10px" }}
        />
        <button onClick = {handleAddPost} style = {{ padding: "10px 20px", backgroundColor: "#28a745", color: "#fff" }}>
          Add Post
        </button>
    </div>
  );
}

export default App;