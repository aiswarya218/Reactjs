import React, { useState, useEffect } from 'react';
import CatCard from './CatCard';
import './App.css';

function App() {
  const [image, setImage] = useState('');
  const [fact, setFact] = useState('');

  const fetchCatImage = async () => {
    const res = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await res.json();
    setImage(data[0].url);
  };

  const fetchCatFact = async () => {
    const res = await fetch('https://catfact.ninja/fact');
    const data = await res.json();
    setFact(data.fact);
  };

  const fetchData = () => {
    fetchCatImage();
    fetchCatFact();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
        <h1> 🐱😼😿🙀😻😸🐈‍😺😽</h1>
      <h1>KITTISAURUS</h1>
      <CatCard image={image} fact={fact} />
      <button onClick={fetchData}>Get Another Cat</button>
    </div>
  );
}

export default App;