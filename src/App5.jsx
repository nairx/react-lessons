import React from "react";
import { useState,createContext } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
export const AppContext = createContext()
export default function App5() {
  const [count, setCount] = useState(5);
   const [count1, setCount1] = useState(5);
  return (
    <AppContext.Provider value={{count,setCount,count1,setCount1}}>
      <Child1 />
      <hr />
      <Child2 />
    </AppContext.Provider>
  );
}
