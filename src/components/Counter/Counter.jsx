import { useState } from "react";

const Counter = (props) => {
    const [count, setCounter] = useState(props.initialValue, props.number);
    const counter = count
    const increment = () => {
        setCounter(count + props.number);
    };
    const decrement = () => {
        setCounter(count -props.number)
    }

    return <>
     <button onClick={increment}>Increment</button>
     <button onClick={decrement}>Decrement</button>
     <div>Counter: {counter}</div>
    </>;
};

export default Counter;