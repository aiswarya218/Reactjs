import React, { useState } from 'react';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const API_KEY = 'YOUR_API_KEY';

  const fetchWeather = async () => {
    if (!city) return;
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();
      if (data.cod === 200) {
        setWeather(data);
        setError('');
      }
      else {
        setWeather(null);
        setError('City not found');
      }
    }
    catch (err) {
      setError('Error fetching data');
    }
  };

  return (
    <div className = "app">
      <h1>  Weather App</h1>
      <input
        type = "text"
        placeholder = "Enter city name"
        value = {city}
        onChange = {e => setCity(e.target.value)}
        />
        <button onClick = {fetchWeather}>Get Weather</button>

        {error && <p className = "error">{error}</p>}

        {weather && (
          <div className = "weather-info">
          <h2>{weather.name}, {weather.sys.country}</h2>
          <p>{weather.weather[0].description}</p>
          <h3>{Math.round(weather.main.temp)}°C</h3>
    </div>
  )}
</div>
  );
}

export default App;