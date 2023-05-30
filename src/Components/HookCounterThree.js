import React, {useState} from 'react'

function HookCounterThree() {

    const[name,setName] = useState({FirstName:'', lastName:""})
  return (

    <form>
        <input
         type='text'
        value={name.FirstName}
        onChange={e => setName({ ...name,FirstName: e.target.value})}
        />
        <input 
        type='text'
        value={name.lastName}
        onChange={e => setName({ ...name,lastName: e.target.value})}
        />
        <h2>Your fisrt name is - {name.FirstName}</h2>
        <h2>Your last name is - {name.lastName}</h2>
        <h2>{JSON.stringify(name)}</h2>
    </form>

 
  )
}

export default HookCounterThree
