import { useState } from "react";

const useInput = (initialVale) => {
  const [value, setValue] = useState(initialVale);
  const onChange = event => {
    console.log(event.target)
  }
  return { value, onChange }
}

const App = () => {
  // UseState
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1)
  const decrementItem = () => setItem(item - 1)

  // UseInpue
  const name = useInput('Mr.')

  return (
    <div className='App'>
      <div>
        <h1>1. UseState</h1>
        <button onClick={decrementItem}>Decrement</button>
        <button onClick={incrementItem}>Increment</button>
      </div>
      <div>
        <h1>2. UseInput</h1>
        <input placeholder='Name' {...name} />
      </div>
    </div>
  );
}

export default App;
