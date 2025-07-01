import React, { useState } from 'react';
import './App.css';

function App() {
  const quotes = [
    "Believe you can and you have halfway there.",
    "Do one thing everyday that scares you.",
    "Dream big and dare to fail.",
    "Everything you can imagine is real.",
    "Turn your wounds into wisdom.",
    "Stay hungry. Stay foolish.",
  ];

  const [quote, setQuote] = useState("Click the button to generate a quote");

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className = "app">
       <h1>💬 Random Quote Generator</h1>
      <div className = "quote-box">
        <p>{quote}</p>
        <button onClick = {generateQuote}>Get Quote</button>
    </div>
    </div>
  );
}

export default App;


// import React, { useState, useEffect } from 'react';
// import './App.css';

// function App() {
//   const [quote, setQuote] = useState('');
//   const [author, setAuthor] = useState('');
//   //  const quotes = [
//   //   "Believe you can and you have halfway there.",
//   //   "Do one thing everyday that scares you.",
//   //   "Dream big and dare to fail.",
//   //   "Everything you can imagine is real.",
//   //   "Turn your wounds into wisdom.",
//   //   "Stay hungry. Stay foolish.",
//   // ];

//   // const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

//   const fetchQuote = async () => {
//     try {
//       const response = await fetch('https://api.quotable.io/random');
//       const data = await response.json();
//       setQuote(data.content);
//       setAuthor(data.author);
//     } catch (error) {
//       setQuote('Failed to fetch quote.');
//       setAuthor('');
//     }
//   };

//   // Fetch a quote when the app loads
//   useEffect(() => {
//     fetchQuote();
//   }, []);

//   return (
//     <div className="app">
//       <h1>🌟 Live Quote Generator</h1>
//       <div className="quote-box">
//         <p className="quote">"{quote}"</p>
//         <p className="author">- {author}</p>
//         <button onClick={fetchQuote}>New Quote</button>
//       </div>
//     </div>
//   );
// }


// export default App;