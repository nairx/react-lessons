import React from "react";
import C1 from "./C1";
import C2 from "./C2";
export default function CMain({ flag }) {
  if (flag === 1) {
    return <C1 />;
  } else {
    return <C2 />;
  }
}
