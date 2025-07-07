import React, { useState } from 'react';
import Timer from './Timer';

function App() {
  const [showTimer, setShowTimer] = useState(true);

  return (
    <div style = {{ textAlign: 'center', padding: '20px' }}>
      <h1> 🕧 useEffect Cleanup Demo</h1>
      <button onClick = {() => setShowTimer(prev => !prev)}>
        {showTimer ? 'Hide' : 'Show'} Timer
      </button>

      {showTimer && <Timer />}
    </div>
  );
}

export default App;