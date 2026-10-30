import React, { useState } from "react";
import { useCallback } from "react";
 const Child = React.memo(({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Click</button>;
});


export default Child