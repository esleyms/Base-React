import React, {useState, useMemo} from 'react'

function Counter1() {
    const [counterOne, setCounterOne] = useState(0)
    
    const [counterTwo, setCounterTwo] = useState(0)


    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }
    
    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }


    const isEven = useMemo (() => {
        let i = 0 
        while( i< 20000000000) i++
        return counterOne % 2 === 0
    }, [counterOne])

    

    
  return (
    <div>
    <div>
      <button onClick={incrementOne}>Count One - {counterOne}</button>
      <span>{isEven ? 'Even' : 'Odd'}</span>
    </div>
    <div>
    <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
    
  </div>
  </div>
  )
}

export default Counter1
