import React, { useState } from 'react';
import ClassComponent from './ClassComponent';
import FunctionalComponent from './FunctionalComponent';

function App() {
  const [show, setShow] = useState(true);

  return (
    <div style = {{ padding : '20px' }}>
      <h1>React Lifecycle Demo</h1>
      <button onClick = {() => setShow(!show)}>
        {show ? 'Unmount Components' : 'Mount Components'}
      </button>
      
      {show && (
        <div style = {{ display : 'flex', gap : '50px' }}>
          <div>
            <h2>Class Component</h2>
            <ClassComponent />
          </div>
          <div>
            <h2>Functional Component</h2>
            <FunctionalComponent />
          </div>
        </div>
      )}
      </div>
  );
}

export default App;