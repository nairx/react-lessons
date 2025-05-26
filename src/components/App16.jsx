import React, { useEffect } from "react";
import { useRef, useState } from "react";
export default function App16() {
  const [num, setNum] = useState(0);
  const prevNum = useRef();
  const msgRef = useRef()
  useEffect(() => {
    prevNum.current = num;
  }, [num]);

  if (prevNum.current > num) {
    msgRef.current.style.color = "red"
  }
  else{
     msgRef.current.style.color = "green"
  }

  return (
    <div>
      <h1>App16</h1>
      <h2>useRef to store previous value</h2>
      <p>
        <input type="number" onChange={(e) => setNum(e.target.value)} />
      </p>
      <hr />
      <p>Current Number:{num}</p>
      <p>Previous Number:{prevNum.current}</p>
      <h3 ref={msgRef}>Hello World</h3>
    </div>
  );
}
