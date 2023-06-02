import React from 'react'
import useCounter from '../Hook/useCounter'

function CounterTwoo() {
    const [count, increment, decrement, reset] = useCounter(0)
  return (
    <div>
        <h2>Count = {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CounterTwoo
