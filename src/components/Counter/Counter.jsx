import { useState } from "react";

const Counter = () => {
    const [count, setCounter] = useState(0);
    const counter = count
    const increment = () => {
        setCounter(count + 1);
    };
    const decrement = () => {
        setCounter(count -1)
    }

    return <>
     <button onClick={increment}>Increment</button>
     <button onClick={decrement}>Decrement</button>
     <div>Counter: {counter}</div>
    </>;
};

export default Counter;