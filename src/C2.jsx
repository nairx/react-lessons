import React from "react";
import { useState } from "react";
import { useEffect } from "react";
export default function C2() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("C2 Mounted");
    return () => {
      console.log("C2 Unmounted");
    };
  }, []);
  return (
    <div>
      C2
      <p>
        <button onClick={() => setCount(count + 1)}>{count}</button>
      </p>
    </div>
  );
}
