import React from "react";
import { useState } from "react";
export default function App9() {
  const [count, setCount] = useState(10);
  const decrement = () => {
    setCount((prev) => prev - 1);
  };
   const increment = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <h1>App9</h1>
      <h2>Assignment</h2>
      <p>
        <button onClick={decrement}>-</button>
        {count}
        <button onClick={increment}>+</button>
      </p>
    </div>
  );
}
