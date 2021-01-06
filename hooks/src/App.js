import { useState } from "react";
const App = () => {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1)
  const decrementItem = () => setItem(item - 1)
  return (
    <div className='App'>
      <h1>Hello {item}</h1>
      <h2>start coding</h2>
      <button onClick={decrementItem}>Decrement</button>
      <button onClick={incrementItem}>Increment</button>
    </div>
  );
}

export default App;
