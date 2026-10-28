import React, { useState } from "react";
import Child from "./Child";
export default function App() {
  const [counter, setCounter] = useState(0);
  const [val, setVal] = useState(0);
  return (
    <div>
      <p>Counter:{counter}</p>
      <p>
        <button onClick={() => setCounter(counter + 1)}>Update Counter</button>
      </p>
      <p>Val:{val}</p>
      <p>
        <button onClick={() => setVal(val + 1)}>Update Val</button>
      </p>
      <Child val={val} />
    </div>
  );
}
