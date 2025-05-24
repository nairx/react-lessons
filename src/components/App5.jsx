import React from "react";
import { useState } from "react";
export default function App5() {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [result, setResult] = useState(0);
  const handleSubmit = () => {
    setResult(Number(a) + Number(b));
  };
  return (
    <div>
      <h1>App5</h1>
      <h2>useState hook</h2>
      <h3>Example 1</h3>
      <p>
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />
      </p>
      <p>
        <input
          type="text"
          placeholder="Enter Age"
          onChange={(e) => setAge(e.target.value)}
        />
      </p>
      {name}-{age}
      <hr />
      <h3>Example 2</h3>
      <p>
        <input
          type="number"
          placeholder="Enter a number"
          onChange={(e) => setA(e.target.value)}
        />
      </p>
      <p>
        <input
          type="number"
          placeholder="Enter a number"
          onChange={(e) => setB(e.target.value)}
        />
      </p>
      <p>
        <button onClick={handleSubmit}>Find Sum</button>
      </p>
      <p>{result}</p>
    </div>
  );
}
