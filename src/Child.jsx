import React from "react";

function Child({val}) {
  console.log("Child Component Rendered");
  return <h1>{val * val}</h1>;
}

export default React.memo(Child)


