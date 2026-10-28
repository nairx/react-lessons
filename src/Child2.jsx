import React from 'react'
import { useContext } from 'react'
import { AppContext } from './App5'
export default function Child2() {
    const {count,setCount} = useContext(AppContext)
  return (
    <div>Child2 - {count}
    
    <p>
        <button onClick={()=>setCount(count+1)}>Update</button>
    </p>
    </div>
  )
}
