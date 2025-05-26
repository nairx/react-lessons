import React from "react";
import Greet from "./Greet";
import { useState } from "react";
export default function App17() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState();
  const increment = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <h1>App17</h1>
      <h2>React Memo - for better performance</h2>
      <p>
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </p>
      <Greet name={name} />
      <p>{count}</p>
      <button onClick={increment}>Update Count</button>
    </div>
  );
}
