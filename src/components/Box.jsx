import React from "react";
import Box1 from "./Box1";
import Box2 from "./Box2";
export default function Box(props) {
  //Method 1 using if statement
  //   if (props.flag === 1) {
  //     return <Box1 />;
  //   } else {
  //     return <Box2 />;
  //   }
  //Method 2 using ternary operator
  {
    return props.flag === 1 ? <Box1 /> : <Box2 />;
  }

  ///Method 3
  //   if (props.flag === 1) return <Box1 />;
  //   else return <Box2 />;
}
