import React from "react";
import { useContext } from "react";
import { AppContext } from "./App5";
export default function Child1() {
  const { count, setCount,count1,setCount1 } = useContext(AppContext);
  return (
    <div>
      <p>
        <button onClick={() => setCount(count + 1)}>Update</button>
          <button onClick={() => setCount1(count1 + 1)}>Update</button>
      </p>
    </div>
  );
}
