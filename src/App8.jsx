import React from "react";
import { useState } from "react";
import CMain from "./CMain";
export default function App8() {
  const [flag, setFlag] = useState(1);
  return (
    <div>
        <h1>Component Life Cycle</h1>
      <button onClick={() => setFlag(1)}>C1</button>
      <button onClick={() => setFlag(2)}>C2</button>
      <hr />
      <CMain flag={flag}/>
    </div>
  );
}
