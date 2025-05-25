import React, { use } from "react";
import { useEffect, useState } from "react";
import "./App13.css"
export default function App13() {
  const [num, setNum] = useState(0);
  const [result1, setResult1] = useState(0);
  const [result2, setResult2] = useState(0);
  const [result3, setResult3] = useState(0);
  const [result4, setResult4] = useState(0);
  useEffect(() => {
    setResult1(100 + num);
    setResult2(100 - num);
    setResult3(100 * num);
    setResult4(100 / num);
  }, [num]);
  return (
    <div>
      <h1>App13</h1>
      <h2>Assignment</h2>
      <div>
        <div className="App13-Row">
          <div>
            <h4>Addition</h4>
            100+{num}={result1}
          </div>
          <div>
            <h4>Subtraction</h4>
            100-{num}={result2}
          </div>
        </div>
        <p>
          <input type="number" onChange={(e)=>setNum(e.target.value)} />
        </p>
        <div className="App13-Row">
          <div>
            <h4>Multiplication</h4>
            100x{num}={result3}
          </div>
          <div>
            <h4>Division</h4>
            100/{num}={result4}
          </div>
        </div>
      </div>
    </div>
  );
}
