import React from 'react'
import App from '../App'

function ChildComponent(props) {
    return (
        <div>
            <button onClick = {()=> props.greetHandler('child')}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent


// import React, { Component } from 'react';
// class EventBind extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             message : 'Hello',
//         };

//         this.clickHandler = this.clickHandler.bind(this);
//     }

//     clickHandler() {
//         return (
//             <div>
//                 <h1>{this.state.message}</h1>
//                 <button onClick = {this.clickHandler}>Click Me</button>
//             </div>
//         );
//     }
// }

// export default EventBind;

// class EventBind extends Component {
//     state = {
//         message : 'Hello',
//     };

//     clickHandler = () => {
//         this.setState({ message : 'Goodbye! '});
//     };

//     render() {
//         return (
//             <div>
//                 <h1>{this.state.message}</h1>
//                 <button onClick = {this.clickHandler}>Click Me</button>
//             </div>
//         );
//     }
// }