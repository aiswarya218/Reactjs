import React, {useEffect, useState } from "react";
import "./App.css";

const cardImages = [
  { src: "/images/health.png", matched: false},
  { src: "/images/arts_and_humanities-Copy.png", matched: false},
  { src: "/images/social_sciences.png", matched: false},
  { src: "/images/data_science.png", matched: false},
  { src: "/images/computer_science-Copy.png", matched: false},
  { src: "/images/business.png", matched: false}
];

function App() {
  const [cards, setCards] = useState([]);
  const [firstChoice, setFirstChoice] = useState(null);
  const [secondChoice, setSecondChoice] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [turns, setTurns] = useState(0);

  const shuffleCards = () => {
    const shuffled = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setFirstChoice(null);
    setSecondChoice(null);
    setCards(shuffled);
    setTurns(0);
  };

  const handleChoice = (card) => {
    firstChoice ? setSecondChoice(card) : setFirstChoice(card);
  };

  useEffect(() => {
    if (firstChoice && secondChoice) {
      setDisabled(true);
      if (firstChoice.src === secondChoice.src) {
        setCards((prevCards) => 
          prevCards.map((card) =>
            card.src === firstChoice.src ? { ...card, matched: true} : card
          )
        );

        resetTurn();
      }
      else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [firstChoice, secondChoice]);

  const resetTurn = () => {
    setFirstChoice(null);
    setSecondChoice(null);

    setTurns((prev) => prev + 1);
    setDisabled(false);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  return(
    <div className = "App">
      <h1>🧠 Memory Game</h1>
      <button onClick = {shuffleCards}>New Game</button>
      <p>Turns: {turns}</p>
      <div className = "card-grid">
        {cards.map((card) => (
          <Card
            key = {card.id}
            card = {card}
            handleChoice = {handleChoice}
            flipped = {card === firstChoice || card === secondChoice || card.matched} 
            disabled = {disabled}
            />
        ))}
      </div>
    </div>
  );
}

function Card({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) handleChoice(card);
  };

  return (
    <div className = "card">
      <div className = {flipped ? "flipped" : ""}>
        <img className = "front" src = {card.src} alt = "card front" />
        <img
          className = "back"
          src = "/images/computer_science.png"
          onClick = {handleClick}
          alt = "card back"
          />
      </div>
    </div>
  );
}

export default App;