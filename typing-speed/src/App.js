import React, { useState, useEffect, useRef } from "react";

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
      finishGame();
    }
    return () => clearTimeout(timer);
  }, [timeLeft, started]);

  const startGame = () => {
    setStarted(true);
    setText("");
    setTimeLeft(30);
    setWpm(null);
    inputRef.current.focus();
  };

  const finishGame = () => {
    setStarted(false);
    const wordsTyped = text.trim().split(" ").length;
    setWpm(wordsTyped * 2); // Game time is 30s, so * 2 for WPM
  };

  const getHighlightedText = () => {
    const correctPart = targetText.slice(0, text.length);
    return [...targetText].map((char, index) => {
      const typedChar = text[index];
      let style = { color: "#aaa" }; // untyped = gray
      if (typedChar != null) {
        style.color = typedChar === char ? "green" : "red";
      }
      return (
        <span key={index} style={style}>
          {char}
        </span>
      );
    });
  };

  return (
    <div style={styles.container}>
      <h1>⌨️ Typing Speed Game</h1>

      <div style={styles.target}>
        {getHighlightedText()}
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
        style={styles.textarea}
      />

      <h2>Time Left: {timeLeft}s</h2>
      {wpm !== null && <h2>Your WPM: {wpm}</h2>}

      <button onClick={startGame} style={styles.button}>
        {started ? "Restart" : "Start Game"}
      </button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: 20,
    fontFamily: "Arial",
  },
  target: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    width: "80%",
    maxWidth: 600,
    margin: "auto",
    textAlign: "left",
    padding: 10,
    border: "1px solid #ccc",
    borderRadius: 8,
    minHeight: 60,
    backgroundColor: "#f9f9f9",
    lineHeight: 1.6,
  },
  textarea: {
    fontSize: 16,
    padding: 10,
    width: "80%",
    maxWidth: 600,
    marginBottom: 20,
  },
  button: {
    padding: "10px 20px",
    fontSize: 16,
    marginTop: 10,
  },
};

export default App;