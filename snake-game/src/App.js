import React, { useEffect, useState, useRef } from "react";
import "./App.css";

const BOARD_SIZE = 10;
const INITIAL_SNAKE = [[0, 0]];
const DIRECTIONS = {
  ArrowUp:[-1, 0],
  ArrowDown: [1, 0],
  ArrowLeft: [0,-1],
  ArrowRight: [0,1],
};

function App() {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState([5, 5]);
  const [direction, setDirection] = useState("ArrowRight");
  const intervalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (DIRECTIONS[e.key]) setDirection(e.key);
    };
    window.addEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(moveSnake, 200);
    return () => clearInterval(intervalRef.current);
  }, [snake, direction]);

  const moveSnake = () => {
    const newHead = [
      (snake[0][0] + DIRECTIONS[direction][0] + BOARD_SIZE) % BOARD_SIZE,
      (snake[0][1] + DIRECTIONS[direction][1] + BOARD_SIZE) % BOARD_SIZE,
    ];

    const newSnake = [newHead, ...snake];
    if (newHead[0] === food[0] && newHead[1] === food[1]) {
      setFood(generateFood(newSnake));
    }
    else {
      newSnake.pop();
    }

    setSnake(newSnake);
  };

  const generateFood = (snake) => {
       let newFood;
       do {
        newFood = [
          Math.floor(Math.random() * BOARD_SIZE),
          Math.floor(Math.random() * BOARD_SIZE),
        ];
       } while (snake.some(([x, y]) => x === newFood[0] && y === newFood[1]));
       return newFood;
  };
  const renderCell = (x,y) => {
    const isSnake = snake.some(([sx, sy]) => sx === x && sy === y);
    const isFood = food[0] === x && food[1] === y;
    return (
      <div
      key = {`${x}-${y}`}
      className = {`cell ${isSnake ? "snake" : ""} ${isFood ? "food" : ""}`}
    ></div>
    );
  };

  return (
    <div className = "board">
      {[...Array(BOARD_SIZE)].map((_, row) =>
      [...Array(BOARD_SIZE)].map((_, col) => renderCell(row, col))
      )}
    </div>
  );
}

export default App;