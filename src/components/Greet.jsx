import React from 'react'

function Greet({name}) {
    console.log("Greet Component was called")
  return (
    <div>
        <h1>Hello {name}</h1>
    </div>
  )
}

export default React.memo(Greet)

