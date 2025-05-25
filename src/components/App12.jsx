import React from "react";
import { useEffect, useState } from "react";
export default function App12() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const increment1 = () => {
    setCount1((prev) => prev + 1);
  };
  useEffect(() => {
    alert("count variable updated");
  }, [count]);

  useEffect(() => {
    alert("count1 variable updated");
  }, [count1]);
  return (
    <div>
      <h1>App12</h1>
      <h2>useEffect - understanding array option</h2>
      {count}
      <p>
        <button onClick={increment}>Update</button>
      </p>
      <hr />
      {count1}
      <p>
        <button onClick={increment1}>Update</button>
      </p>
    </div>
  );
}
