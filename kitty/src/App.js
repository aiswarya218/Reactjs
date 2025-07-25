import React, { useEffect, useState } from 'react';
import VideoList from './VideoList';
import './App.css';

function App() {
  const [videos, setVideos] = useState([]);

  const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
  const CHANNEL_ID = 'UCtckgmUcpzqGnzcs7xEqMzQ'; // Kittisaurus channel ID

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=10`
    )
      .then((res) => res.json())
      .then((data) => {
        setVideos(data.items);
      })
      .catch((error) => console.error('Error fetching videos:', error));
  }, [API_KEY]);

  return (
    <div className="app">
      <h1>🐱 Kittisaurus TV</h1>
      <VideoList videos={videos} />
    </div>
  );
}

export default App;