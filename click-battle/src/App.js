import React, { useState, useEffect } from "react";

function App() {
  const [player1Count, setPlayer1Count] = useState(0);
  const [player2Count, setPlayer2Count] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (timeLeft === 0) {
      setGameOver(true);
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const resetGame = () => {
    setPlayer1Count(0);
    setPlayer2Count(0);
    setTimeLeft(10);
    setGameOver(false);
  };

  return (
       <div style={styles.container}>
      <h1>⚔️ Click Battle</h1>
      <h2>Time Left: {timeLeft}s</h2>

      <div style={styles.players}>
        <div style={styles.player}>
          <h3>Player 1</h3>
          <p>Clicks: {player1Count}</p>
          <button
            onClick={() => setPlayer1Count(player1Count + 1)}
            disabled={gameOver}
            style={styles.button}
          >
            Click Me!
          </button>
        </div>

        <div style={styles.player}>
          <h3>Player 2</h3>
          <p>Clicks: {player2Count}</p>
          <button
            onClick={() => setPlayer2Count(player2Count + 1)}
            disabled={gameOver}
            style={styles.button}
          >
            Click Me!
          </button>
        </div>
      </div>

      {gameOver && (
        <div style={styles.result}>
          <h2>
            {player1Count === player2Count
              ? "🤝 It's a Tie!"
              : player1Count > player2Count
              ? "🏆 Player 1 Wins!"
              : "🏆 Player 2 Wins!"}
          </h2>
          <button onClick={resetGame} style={styles.resetButton}>
            Play Again
          </button>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: 20,
    fontFamily: "Arial",
  },
  players: {
    display: "flex",
    justifyContent: "center",
    gap: 40,
    marginTop: 20,
  },
  player: {
    border: "2px solid #ccc",
    borderRadius: 10,
    padding: 20,
    width: 200,
  },
  button: {
    padding: "10px 20px",
    fontSize: 16,
    marginTop: 10,
  },
  result: {
    marginTop: 30,
  },
  resetButton: {
    padding: "8px 16px",
    fontSize: 16,
    marginTop: 10,
  },
};

export default App;


// import React, { useEffect, useState } from "react";
//  function UserList() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch("http://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => setUsers(data))
//       .catch((error) => console.error("Error fetching users:", error));
//   }, []);

//   return (
//     <div>
//       <h2>User List</h2>
//       {users.map((user) => (
//         <p key = {user.id}>{user.name}</p>
//       ))}
//     </div>
//   );
//  }

//  export default UserList;




// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function PostList() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     axios
//     .get("http://jsonplaceholder.typicode/posts")
//     .then((response) => setPosts(response.data))
//     .catch((error) => console.error("Error fetching posts:", error));
//   },[]);

//   return (
//     <div>
//       <h2>Post List</h2>
//       {posts.map((post) => (
//         <p key = {post.id}>{post.title}</p>
//       ))}
//     </div>
//   );
// }

// export default PostList;