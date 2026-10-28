import React from "react";

function Child(props) {
  console.log("Child Component Rendered");
  return <h1>{props.val * props.val}</h1>;
}

export default React.memo(Child)


