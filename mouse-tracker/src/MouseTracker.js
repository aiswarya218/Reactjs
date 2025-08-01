import React, { useState, useEffect } from 'react';

function MouseTracker({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {render(position)}

      {/* 🟢 Visual Circle That Follows the Cursor */}
      <div
        style={{
          position: 'absolute',
          top: position.y - 10,
          left: position.x - 10,
          width: 20,
          height: 20,
          borderRadius: '50%',
          backgroundColor: 'rgba(0, 150, 255, 0.6)',
          pointerEvents: 'none',
          transition: 'top 0.05s, left 0.05s',
        }}
      />
    </>
  );
}

export default MouseTracker;
