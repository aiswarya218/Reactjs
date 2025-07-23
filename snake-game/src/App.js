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
      if (DIRECTIONS[e.key] setDirection(e.key);
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
    if (newHead[0] === food)
  }
}
