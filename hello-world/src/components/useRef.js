// import React, { useRef } from 'react';

// function App() {
//     const inputRef = useRef(null);

//     const handleClick = () => {
//         inputRef.current.focus();
//     };

//     return (
//         <div>
//             <h2>useRef Example</h2>
//             <input type = "text" ref = {inputRef} placeholder = "Click button to focus" />
//             <button onClick = {handleClick}>Focus Input</button>
//         </div>
//     );
// }

// export default App;


// import React, { useEffect, useRef, useState } from 'react';

// function App() {
//     const [count, setCount] = useState(0);
//     const prevCount = useRef();

//     useEffect(() => {
//         prevCount.current = count;
//     }, [count]);

//     return (
//         <div>
//             <h2>Current : {count}</h2>
//             <h3>Previous : {prevCount.current}</h3>
//             <button onClick = {() => setCount(count + 1)}>Increment</button>
//         </div>
//     );
// }

// export default App;

import React, { Component } from 'react';

class App extends Component {
    constructor() {
        super();
        this.inputRef = React.createRef();
    }

    focusInput = () => {
        this.inputRef.current.focus();
    };

    render() {
        return (
            
            <div>
            <h2>Class Component Ref Example</h2>
            <input type = "text" ref= {this.inputRef} />
            <button onClick = {this.focusInput}>Focus Input</button>
            </div>
        );
    }
}

export default App;