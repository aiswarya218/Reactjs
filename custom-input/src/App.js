import React, { useRef } from 'react';
import CustomInput from './components/CustomInput';
import CustomButton from './components/CustomButton';

function App() {
  const inputRef = useRef(null);
  const buttonRef = useRef(null);

  const handleFocusInput = () => {
    inputRef.current.focus();
  };

  const handleClickButton = () => {
    buttonRef.current.click();
  };

  const handleButtonAction = () => {
    alert(`Button triggered with value: ${inputRef.current.value}`);
  };

  return (
    <div style = {{ padding : '2rem', fontFamily : 'Arial' }}>
      <h1>Ref Forwarding Demo App</h1>

      <CustomInput ref = {inputRef} />
      <br /><br />

      <CustomButton ref = {buttonRef} onClick = {handleButtonAction}>
        Submit
      </CustomButton>
      <br /><br />

      <button onClick = {handleFocusInput}>Focus the input</button>
      <button onClick = {handleClickButton} style = {{ marginLeft : '10px' }}>
        Trigger Submit Button
      </button>
    </div>
  );
}

export default App;