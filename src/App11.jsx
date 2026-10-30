import { useState,useCallback } from "react";
import Child from "./Child"
export default function App11() {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []);
  return (
    <div>
      {count} {" "}
      <button onClick={() => setCount(count + 1)}>Update Count</button>
      <br />
      <Child onClick={handleClick} />
    </div>
  );
}
