import React from "react";
import { useRef } from "react";
export default function App7() {
  const nameRef = useRef();
  const titleRef = useRef();
  const handleSubmit = () => {
    titleRef.current.style.color = nameRef.current.value;
  };
  return (
    <div>
      <input type="text" ref={nameRef} />{" "}
      <button onClick={handleSubmit}>Submit</button>
      <h1 ref={titleRef}>Hello World</h1>
    </div>
  );
}
