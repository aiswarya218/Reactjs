import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [car1Pos, setCar1Pos] = useState(0);
  const [car2Pos, setCar2Pos] = useState(0);
  const [racing, setRacing] = useState(false);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    let interval;
    if (racing && !winner) {
      interval = setInterval(() => {
        setCar1Pos((prev) => {
          const next = prev + Math.random() * 2;
          if (next >= 90) {
            setWinner("Car 1🚗");
            setRacing(false);
          }
 
    return () => clearInterval(interval);
  }, [racing, winner]);

  const startRace = () => {
    setCar1Pos(0);
    setCar2Pos(0);
    setWinner(null);
    setRacing(true);
  };

  return (
    <div className = "race-container">
      <h1>🏁 Simple Racing Game</h1>
      <div className = "track">
        <div className = "car1" style = {{ left: `${car1Pos}%` }}>🚗</div>
        <div className = "car2" style = {{ left: `${car2Pos}%` }}>🚙</div>
      </div>
      <button onClick = {startRace} className = "race-button">
        Start Race
      </button>
      {winner && <h2 className = "winner"> 🏆 {winner} Wins!</h2>}
    </div>
  );
}

export default App;