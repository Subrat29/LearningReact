import { useState } from "react";

function App2() {

    // let [count, setCount] = useState(20)
    const [count, setCount] = useState(20)

    const incrementCount = () => {
        // count = count + 1;
        setCount(count + 1);
        setCount(count + 1);
        console.log("inc count: " + count)
    }

    const incrementCountBy5 = () => {
        setCount(prevCount => prevCount + 5)
        console.log("inc count by 5: " + count)
    }

    const decrementCount = () => {
        // count = count - 1;
        setCount(count - 1)
        console.log("dec count: " + count)
    }

    return (
        <>
            <h1>Count = {count}</h1>
            <br />
            <button onClick={incrementCount} >Increment count: {count}</button>
            <br />
            <br />
            <button onClick={decrementCount} >Decrement count: {count}</button>
            <br />
            <br />
            <button onClick={incrementCountBy5} >Increment count by +5: {count}</button>
        </>
    )
}

export default App2;