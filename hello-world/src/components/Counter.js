// import React, { Component } from 'react'

// class Counter extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             count : 0
//         }
//     }

//     increment() {
//     //    this.setState(
//     //     {
//     //     count : this.state.count + 1
//     //     },
//     //     () => {
//     //         console.log('Callback value', this.state.count)
//     //     }
//     // )
//     //     console.log(this.state.count)
//     // }

//     this.setState(prevState => ({
//         count : prevState.count + 1
//     }))
//     console.log(this.state.count)
// }
//     incrementFive() {
//           this.increment()
//           this.increment()
//           this.increment()
//           this.increment()
//           this.increment()
//     }

//     render() {
//         return (
//             <div>
//                 <div>Count - {this.state.count}</div>
//                 <button onClick = {() => this.increment()}>Increment</button>
//             </div>
//         );
//     }
// }

// export default App;


import React, { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        <h2>Count - {this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
