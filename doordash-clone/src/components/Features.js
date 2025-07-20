import React from 'react';
import './Features.css';

const Features = () => {
  const heights = [
    100, 120, 140, 90, 130, 150, 110, 170, 125, 95,
    105, 115, 160, 135, 145, 155, 165, 180, 190, 200
  ];
  return (
    <div className="features">
      {heights.map((height, index) => (
        <div key={index} className="box" style={{ height: `${height}px` }}>
          {height}px
        </div>
      ))}
    </div>
  );
};

export default Features;



