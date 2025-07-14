import React, { Component } from 'react';

class ClassComponent extends Component {
    constructor() {
        super();
        this.state = { count : 0 };
        console.log('Class : Constructor');
    }

    componentDidMount() {
        console.log('Class : componentDidMount');
    }

    componentDidUpdate() {
        console.log('Class : componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('Class : componentWillUnmount');
    }

    render() {
        console.log('Class : render');
        return (
            <div>
                <p>Count : {this.state.count}</p>
                <button onClick = {() => this.setState({ count : this.state.count + 1 })}>
                    Increment
                </button>
            </div>
        );
    }
}

export default ClassComponent;