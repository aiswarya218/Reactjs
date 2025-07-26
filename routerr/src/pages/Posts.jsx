// import { Link } from "react-router-dom";

// const posts = [
//     { id: 1, title: "First Post" },
//     { id: 2, title: "Second Post" },
//     { id: 3, title: "Third Post" }
// ];

// function Posts() {
//     return (
//         <div>
//             <h2> Blog Posts</h2>
//             <ul>
//                 {posts.map(post => (
//                     <li key = {post.id}>
//                         <Link to={`/posts/${post.id}`}>{post.title}</Link>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default Posts;




// import { useParams } from "react-router-dom";
// function PostDetail() {
//     const { id } = useParams();
//     return (
//         <div>
//             <h2> Viewing Post #{id}</h2>
//             <p>This is the content of blog post {id}.</p>
//         </div>
//     );
// }

// export default PostDetail;


import React from "react";
import { BrowserRoute, Routes, Route, Link, useParams, Outlet, Navigate } from "react-router-dom";

const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;

const Dashboard = () => (
    <div>
        <h2>Dashboard</h2>
        <nav>
            <Link to="profile">Profile</Link>  | <Link to="settings">Settings</Link>
        </nav>
        <Outlet />
    </div>
);

const Profile = () => <h3> Dashboard Profile</h3>;
const Settings = () => <h3> Dashboard Settings</h3>;

const User = () => {
    const { username } = useParams();
    return <h2>  Hello, {username}</h2>;
};

const NotFound = () => <h2> 404 - Page Not Found</h2>;

export default function App() {
    return (
        <BrowserRouter>
        <div style ={{ padding: "1rem" }}>
            <nav>
                <Link to="/">Home</Link> | 
                <Link to="/about">About</Link> | 
                <Link to="/posts">Posts</Link> | 
                <Link to="/dashboard">Dashboard</Link> | 
                <Link to="/user/johndoe">User John Doe</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />

                <Route path="/dashboard" element={<Dashboard />}>
                <Route index element={<Navigate to="profile" />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="settings" element={<Settings />} />
                </Route>

                <Route path="/user/:username" element={<User />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            </div>
        </BrowserRouter>
    );
}