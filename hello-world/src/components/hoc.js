// function withGreeting(WrappedComponent) {
//     return function EnhancedComponent(props) {
//         return (
//             <div>
//                 <h2>Hello from HOC!</h2>
//                 <WrappedComponent {...props} />
//             </div>
//         );
//     };
// }


// function MyComponent(props) {
//     return <p>This is the original component. Name : {props.name}</p>;
// }


const EnhancedComponent = withGreeting(MyComponent);

function App() {
    return (
        <div>
            <EnhancedComponent name = "Avani" />
        </div>
    );
}


