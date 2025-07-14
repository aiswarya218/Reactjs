import React, { useState } from 'react';

function MouseTracker({ render }) {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    return (
        <div style = {{ height: '300px', border: '1px solid #ccc' }} onMouseMove = {handleMouseMove}>
            {render(position)}
        </div>
    );
  }

  export default MouseTracker;
