import './index.css';

function App() {
  const user = {
    name: "Ami",
    title: "Frontend Developer",
    image: "https://randomuser.me/api/portraits"
  };

  return (
    <div className = "card">
      <img src = "https://i.pravatar.cc/150?img=5" alt = "User" />
      <h2>{user.name}</h2>
      <p>{user.title}</p>
      <button>Follow</button>
    </div>
  );
}

export default App;