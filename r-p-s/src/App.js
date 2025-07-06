
import React, { useState } from 'react';

const choices = ['Rock', 'Paper', 'Scissors'];

function App() {
  const [userChoice, setUserChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');

  const playGame = (choice) => {
    const compChoice = choice[Math.floor(Math.random() * 3)];
    setUserChoice(choice);
    setComputerChoice(compChoice);
    determineWinner(choice, compChoice);
  };

  const determineWinner = (user, comp) => {
    if (user === comp) {
      setResult("It's a draw!");
    }
    else if (
      (user === 'Rock' && comp === 'Scissors') ||
      (user === 'Paper' && comp === 'Rock') ||
      (user === 'Scissors' && comp === 'Paper')
     ) {
      setResult(' 🎉 You Win!');
    }
    else {
      setResult(' 😢 You Lose!');
    }
  };

  return (
    <div style = {StyleSheet.container}>
      <h1>Rock  Paper Scissor</h1>
      <div>
        {choices.map((choice) => (
          <button
          key = {choice}
          onClick = {() => playGame(choice)}
          style = {StyleSheet.choiceButton}
          >
            {choice}
          </button>
        ))}
      </div>
      <div style = {styles.results}>
      <p>Your Choice: <strong>{userChoice}</strong></p>
      <p>Choice's Choice: <strong>{computerChoice}</strong></p>
      <h2>{result}</h2>
    </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
    fontFamily: 'Arial',
  },
  choiceButton: {
    margin: '10px',
    padding: '10px 20px',
    fontSize: '18px',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  results: {
    marginTop: '30px',
  },
};

export default App;