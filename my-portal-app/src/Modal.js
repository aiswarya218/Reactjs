// import React from 'react';
// import ReactDOM from 'react-dom';
// import { jsx } from 'react/jsx-runtime';

// const modalRoot = document.getElementById('modal-root');

// const Modal = ({ children, onClose }) => {
//     return ReactDOM.createPortal(
//         <div style = {overlayStyle}>
//       <div style={modalStyle}>
//         {children}
//         <br />
//         <button onClick={onClose} style={closeBtnStyle}>Close</button>
//       </div>
//     </div>,
//     modalRoot
//   );
// };

// const overlayStyle = {
//   position: 'fixed',
//   top: 0, left: 0, right: 0, bottom: 0,
//   backgroundColor: 'rgba(0,0,0,0.5)',
//   display: 'flex', alignItems: 'center', justifyContent: 'center'
// };

// const modalStyle = {
//   background: '#fff',
//   padding: '20px',
//   borderRadius: '8px',
//   width: '300px',
//   textAlign: 'center'
// };

// const closeBtnStyle = {
//   marginTop: '15px',
//   padding: '8px 16px',
//   background: '#444',
//   color: 'white',
//   border: 'none',
//   borderRadius: '4px',
//   cursor: 'pointer'
// };

// export default Modal;


import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

function Modal({ children, onClose }) {
  return ReactDOM.createPortal(
    <>
    <div className = "modal-overlay" onClick = {onClose}></div>
    <div className = "modal-container">
      {children}
      <button className = "modal-close-btn" onClick = {onClose}>Close</button>
    </div>
    </>,
    document.getElementById('modal-root')
  );
}

export default Modal;