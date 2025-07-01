// import React, { Component } from 'react';
// // import logo from './logo.svg';
// // import './App.css';
// // import { Greet } from './components/Greet'

// // class App extends Componenet {
// //     render () {
// //         return (
// //             <div className = "App">
// //                 <MyComponent />
// //             </div>
// //         );
// //     }
// // }

// // export default App;

// const Greet = () => <h1>Hello Aggarwal</h1>

// export default Greet


import React from 'react';

const Greet = (props) => {
  return (
    <div>
      <h1>Hello {props.name} a.k.a {props.heroName}</h1>
      {props.children}
    </div>
  );
};

export default Greet;
