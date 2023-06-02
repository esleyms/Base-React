import React, { useState } from 'react'
import {ChildA} from './ContextChildren'

export const CountContex = CountContex.provider

export const ContextParent = () => {
    const [count, setCount] =useState(0)

    console.log('ContextParent Render')
  return (
    <>
      <button onClick={() => setCount(c = c + 1)}>Count {count}</button>
      <ChildA/>
    </>
  )
}


