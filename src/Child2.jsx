import React from "react";
import { useContext } from "react";
import { AppContext } from "./App5";
export default function Child2() {
  const { count, count1 } = useContext(AppContext);
  return (
    <div>
      Child2 -<p>Count:{count}</p>
      <p>Count1:{count1}</p>
      {/*     
    <p>
        <button onClick={()=>setCount(count+1)}>Update</button>
    </p> */}
    </div>
  );
}
