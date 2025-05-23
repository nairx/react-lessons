import React from 'react'

export default function Calc(props) {
    let result = props.v1 + props.v2
  return (
    <div>
        Sum of {props.v1} and {props.v2} is {result}
    </div>
  )
}
