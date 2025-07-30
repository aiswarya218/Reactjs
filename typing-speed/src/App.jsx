import React, { useState, useEffect, useRef } from "react";
import "./App.css";

const sentences = [
  "The quick brown fox jumps over the lazy dog.",
  "React makes it painless to create interactive UIs.",
  "Typing fast is a useful and fun skill to develop.",
  "Practice typing to improve your speed and accuracy.",
  "OpenAI's models can generate and understand code."
];

function App() {
  const [text, setText] = useState("");
  const [targetText, setTargetText] = useState("");
  const [timeLeft, setTimeLeft] = useState(30);
  const [started, setStarted] = useState(false);
  const [wpm, setWpm] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    setTargetText(sentences[Math.floor(Math.random() * sentences.length)]);
  }, []);

  useEffect(() => {
    let timer = null;
    if (started && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0) {
      setStarted(false);
      const correctChars = text.split('').filter((char, idx) => char === targetText[idx]).length;
      const wordsTyped = correctChars / 5;
      setWpm(Math.round(wordsTyped * 2));
  }
  return () => clearTimeout(timer);
}, [timeLeft, started, text, targetText]);

  const startGame = () => {
    setStarted(true);
    setText("");
    setTimeLeft(30);
    setWpm(null);
    setTargetText(sentences[Math.floor(Math.random() * sentences.length)]);
    inputRef.current.focus();
  };

  const getHighlightedText = () => {
    return [...targetText].map((char, index) => {
      const typedChar = text[index];

      let className = "untyped";
      if (typedChar != null) {
        className = typedChar === char ? "correct" : "incorrect";
      }
      return (
        <span key={index} className = {className}>
          {char}
        </span>
      );
    });
  };

    console.log("started", started);
  return (
    <div className = "typing-container">
      <h1>⌨️ Typing Speed Game</h1>

      <div className = "target-text">
        {getHighlightedText()}
      </div>
      
      <div className = "progress-bar-wrapper">
        <div
        className = "progress-bar"
        style = {{ width: `${((30 - timeLeft) / 30) * 100}%` }}
      ></div>
      </div>

      <textarea
        ref={inputRef}
        rows="4"
        cols="50"
        placeholder="Start typing here..."
        value={text}
        onChange={(e) => {
          if (!started) return;
          setText(e.target.value);
        }}
        disabled={!started || timeLeft === 0}
        className="typing-area"
      />  

      <h2>Time Left: {timeLeft}s</h2>
      {wpm !== null && <h2>Your WPM: {wpm}</h2>}

      <button onClick={startGame} className = "start-button">
        {started ? "Restart" : "Start Game"}
      </button>
    </div>
  );
}

export default App;