import React from "react";
import { useState } from "react";
export default function App4() {
  const [count, setCount] = useState(0);
  const [counter,setCounter] = useState(0)
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Update</button>
      <hr />
        <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Update</button>
    </div>
  );
}
