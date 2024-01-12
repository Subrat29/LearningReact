import { useState } from 'react';
import './App.css'

function App() {

  let [counter, setCounter] = useState(15);

  const addValue = () =>{
    if(counter + 1 <= 20)
    {
      setCounter(counter + 1);
      console.log(counter);
      setCounter(counter => counter + 1)
      setCounter(counter => counter + 1)
      // setCounter(counter + 1);
    }
  }

  const removeValue = () =>{
    if(counter - 1 >= 0)
    {
      counter = counter - 1;
      console.log(counter);
      setCounter(counter);
    }
  }

  return (
    <>
    <h1>This is lecture 04</h1>
    <h2>Counter value: {counter}</h2>

    <button onClick={addValue}>Add value</button>
    <br />
    <br />
    <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
