import React from "react";
import { useContext } from "react";
import { AppContext } from "./App5";
export default function Child1() {
  const { count, setCount } = useContext(AppContext);
  return (
    <div>
      Child1 - {count}
      <p>
        <button onClick={() => setCount(count + 1)}>Update</button>
      </p>
    </div>
  );
}
