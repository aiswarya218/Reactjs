import React from 'react';

const CustomInput = React.forwardRef((props, ref) => {
    return <input type = "text" placeholder = "Enter something..." ref = {ref} />;
});

export default CustomInput;

