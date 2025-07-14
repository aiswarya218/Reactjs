import React from 'react';
import MouseTracker from './MouseTracker';

function App() {
  return (
    <div>
      <h2>🐭 Mouse Tracker (Render Props)</h2>
      <MouseTracker 
          render = {({ x,y }) => (
            <p>Mouse position: X= {x}, Y= {y}</p>
          )}
          />
    </div>
  );
}

export default App;