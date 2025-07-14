import React, { Component } from 'react';

class LifecycleDemo extends Component {
    constructor() {
        super();
        this.state = { count: 0 };
        console.log('Constructor');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render () {
        console.log('Render');
        return (
            <div>
                <h2>Count : {this.state.count}</h2>
                <button onClick = {() => this.setState({ count: this.state.count + 1})}>
                    Increment
                </button>
            </div>
        );
    }
}

export default LifecycleDemo;




// import React, { useState, useEffect } from 'react';

// function FunctionalDemo() {
//     const [count, setCount] = useState(0);

//     useEffect(() => {
//         console.log('Mounted');
//         return () => {
//             console.log('Unmounted');
//         };
//     }, []);

//     useEffect(() => {
//         console.log('Updated: count =', count);
//     }, [count]);

//     return (
//         <div>
//         <h2>Count : {count}</h2>
//         <button onClick = {() => setCount(count + 1)}>Increment</button>
//         </div>
//     );
// }

// export default FunctionalDemo;



// class Example extends React.Component {
//     constructor() {
//         super();
//         console.log('Constructor');
//     }

//     componentDidMount() {
//         console.log('Mounted');
//     }

//     componentDidUpdate() {
//         console.log('Updated');
//     }

//     componentWillUnmount() {
//         console.log('Unmounted');
//     }

//     render() {
//         return <div>Hello</div>
//     }
// }


// function Example() {
//     useEffect(() => {
//         console.log('Mounted');
//         return () => {
//             console.log('Unmounted');
//         };
//     }, []);


//     useEffect(() => {
//         console.log('Updated');
//     });

//     return <div>Hello</div>
// }