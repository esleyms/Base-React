import React, { useContext } from 'react';
import { CountContext } from '../App';

function CompF() {
  const { countState,countDispatch } = useContext(CountContext);
  
  return (
    <div>
      Component F -  {countState}
      <button onClick={() => countDispatch('increment')}>Increment</button>
      <button onClick={() => countDispatch('decrement')}>Decrement</button>
      <button onClick={() => countDispatch('reset')}>Reset</button>
    </div>
  );
}

export default CompF;
