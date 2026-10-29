import React from "react";
import { useMemo } from "react";
import { useState } from "react";
export default function App10() {
  const [counter, setCounter] = useState(5);
  const expensiveCalc = useMemo(() => {
    console.log("Expensive Calc");
    return 5+counter;
  }, [counter]);
  return (
    <div>
      {expensiveCalc}
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Update</button>
    </div>
  );
}
