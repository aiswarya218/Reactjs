import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [numberToGuess, setNumberToGuess] = useState(generateRandomNumber());
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [attempts, setAttempts] = useState(0);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  const handleGuess = () => {
    const numericGuess = parseInt(guess);
    if (isNaN(numericGuess)) {
      setFeedback('❌ Please enter a valid number.');
      return;
    }

    setAttempts(attempts + 1);

    if (numericGuess < numberToGuess) {
      setFeedback('🔼 Too low!');
    }
    else if (numericGuess > numberToGuess) {
      setFeedback('🔽 Too high!');
    }
    else {
      setFeedback(`🎉 Correct! You guessed it in ${attempts + 1} attempts`);
    }

    setGuess('');
  };

  const restartGame = () => {
    setNumberToGuess(generateRandomNumber());
    setGuess('');
    setFeedback('');
    setAttempts(0);
  };

  return (
    <div className = "App">
      <h1>  Number Guessing Game</h1>
      <p>Guess a number between 1 and 100</p>
      <input type = "number" value = {guess} onChange = {(e) => setGuess(e.target.value)}
      placeholder = "Enter your guess"
      />
      <button onClick = {handleGuess}>Submit</button>
      <p>{feedback}</p>
      <button onClick = {restartGame}> 🔁 Restart Game</button>
    </div>
  );
}

export default App;
