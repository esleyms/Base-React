import React, {useState} from 'react'
import { ParentOne } from './ParentOne'
import { ChildOne } from './ChildOne'

export const GranParent = () => {
    const [newCount, setNewCount] = useState(0)
  return (
    <div>
      <button onClick={() => setNewCount((nc) => nc + 1)}>
        GranParent Count - {newCount}
        </button>
        <ParentOne newCount={newCount}>
            <ChildOne/>
        </ParentOne>
    </div>
  )
}

