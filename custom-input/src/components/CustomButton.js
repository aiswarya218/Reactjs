import React from 'react';

const CustomButton = React.forwardRef((props, ref) => {
    return (
        <button ref = {ref} {...props}>
            {props.children}
        </button>
    );
});

export default CustomButton;