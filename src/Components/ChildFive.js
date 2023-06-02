import React from 'react'

export const ChildFive = ({name, person}) => {
    console.log('ChildFive Render')
  return (
    <div>
      Hello {name} {person.fname} {person.lname}
    </div>
  )
}

export const MemoozedChildFive =  React.memo(ChildFive)