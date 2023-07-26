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
     <button onClick={increment}>+</button>
     <button onClick={decrement}>-</button>
     <div>Counter: {counter}</div>

    </>;
};

export default Counter;