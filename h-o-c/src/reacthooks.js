//HOOKS

//useState
import { useLayoutEffect, useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <button onClick = {() => setCount(count + 1)}>
            Count: {count}
        </button>
    );
}


//useEffect
import { useEffect } from 'react';

useEffect(() => {
    console.log("Component mounted or updated");

    return () => {
        console.log("Component will unmount");
    };
},[]);


//useContext
const ThemeContext = React.createContext();

function App() {
    return (
        <ThemeContext.Provider value = "dark">
            <Child />
        </ThemeContext.Provider>
    );
}

function Child() {
    const theme = useContext(ThemeContext);
}


//useRef
import { useRef, useEffect } from 'react';

function InputFocus() {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    },[]);

    return <input ref = {inputRef} />;
}


//useMemo
const expensiveValue = useMemo(() => {
    return heavyCalculation(input);
}, [input]);


//useCallback
const memoizedFn = useCallback(() => {
    doSomething(a, b);
}, [a, b]);


//useReducer
const reducer = (state, action) => {
    switch(action.type) {
        case 'increment' : return { count: state.count + 1};
        default: return state;
    }
};

const  [state, dispatch] = useReducer(reducer, { count: 0 });
dispatch({ type: 'increment' });


//useLayoutEffect
useLayoutEffect(() => {

});


//useId
const id = useId();


//----------------------------
function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return width;
}