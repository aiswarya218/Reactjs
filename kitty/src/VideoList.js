import React from 'react';

function VideoList({ videos }) {
  if (!videos || !Array.isArray(videos)) {
    return <p>Loading videos... 🐾</p>; // Or return nothing/null
  }

  return (
    <div className="video-list">
      {videos.map((video) => (
        <div key={video.id.videoId} className="video-card">
          <a
            href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
            />
            <h3>{video.snippet.title}</h3>
          </a>
        </div>
      ))}
    </div>
  );
}

export default VideoList;