import React, { createContext, useState } from 'react';
import Modal from './Modal';
import { jsx } from 'react/jsx-runtime';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style = {{ textAlign : 'center', marginTop : '100px' }}>
      <h1>React Portal Modal</h1>
      <button onClick = {() => setIsOpen(true)} style = {{ padding : '10px 20px' }}>
        Open Modal
      </button>

      {isOpen && (
        <Modal onClose = {() => setIsOpen(false)}>
          <h2>This is a portal modal</h2>
          <p>You clicked the button to open this!</p>
        </Modal>
      )}
    </div>
  );
}

export default App;




