import React from 'react'
import { useContext } from 'react'
import { AppContext } from './App5'
export default function Child1() {
    const {count} = useContext(AppContext)
  return (
    <div>Child1 - {count}</div>
  )
}
