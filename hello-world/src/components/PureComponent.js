import React, { Component } from 'react';
import Message from './Message';

class App extends Component {
     state = {
        text : 'Hello'
     };

     render() {
        return (
            <div>
                <Message text = {this.state.text} />
                <button onClick = {() => this.setState({ text : 'Hello' })}>
                    Update with same value
                </button>
            </div>
        );
     }
}

export default App;


// import React, { useState } from "react";

// const CounterDisplay = React.memo(({ count }) => {
//     console.log("CounterDisplay re-rendered");
//     return <h2>Count : {count}</h2>;
// });

// function App() {
//     const [count, setCount] = useState(0);
//     const [text, setText] = useState("");

//     return (
//         <div>
//             <h1>React.memo Demo</h1>
//             <CounterDisplay count = {count} />
//             <button onClick = {() => setCount(count + 1)}>Increment Count</button>
//             <br />
//             <input type = "text" placeholder = "Type here..."  value = {text}  onChange = {(e) => setText(e.target.value)}
//             />
//         </div>
//     );
// }

// export default App;