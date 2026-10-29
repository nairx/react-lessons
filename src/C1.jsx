import React from "react";
import { useEffect } from "react";
import { useState } from "react";
export default function C1() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("C1 Mounted");
    return () => {
      console.log("C1 Unmounted");
    };
  }, []);

  const handleUpdate = () => {
    console.log("C1 Updated / Re-rendered")
    setCount(count + 1);
  };
  return (
    <div>
      C1
      <p>
        <button onClick={handleUpdate}>{count}</button>
      </p>
    </div>
  );
}
