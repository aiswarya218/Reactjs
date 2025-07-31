import React, { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [car1Pos, setCar1Pos] = useState(0);
  const [car2Pos, setCar2Pos] = useState(0);
  const [racing, setRacing] = useState(false);
  const [winner, setWinner] = useState(null);
  const raceIntervalRef = useRef(null);

  const startRace = () => {
    setCar1Pos(0);
    setCar2Pos(0);
    setWinner(null);
    setRacing(true);
  };

    useEffect(() => {
      if (racing) {
        raceIntervalRef.current = setInterval(() => {
          setCar1Pos((prev) => {
            const next = prev + Math.random() * 3;
            if (next >= 90 && !winner) {
              setWinner("  Car 1");
              setRacing(false);
            }
            return next >= 100 ? 100 : next;
          });

          setCar2Pos((prev) => {
            const next = prev + Math.random() * 3;
            if (next >= 90 && !winner) {
              setWinner((w) => w || " Car 2");
              setRacing(false);
            }
            return next >= 100 ? 100 : next;
          });
        }, 100);
      }

      return () => clearInterval(raceIntervalRef.current);
    }, [racing, winner]);

  return (
    <div className = "race-container">
      <h1>🏁 Simple Racing Game</h1>
      <div className = "track">
        <div className = "car car1" style = {{ left: `${car1Pos}%` }}>🚗</div>
        <div className = "car car2" style = {{ left: `${car2Pos}%` }}>🚙</div>
      </div>
      <button onClick = {startRace} className = "race-button">
        Start Race
      </button>
      {winner && <h2 className = "winner"> 🏆 {winner} Wins!</h2>}
    </div>
  );
}
 
export default App;