import React from "react";
import Fruit from "./Fruit";
export default function App6() {
  return (
    <div>
      <h1>App6</h1>
      <h2>Assigment</h2>
      <div style={{display:'flex',flexWrap:'wrap'}}>
        <Fruit name="Apple" />
        <Fruit name="Orange" />
        <Fruit name="Mango" />
        <Fruit name="Banana" />
      </div>
    </div>
  );
}
