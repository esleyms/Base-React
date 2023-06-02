import React  from 'react';
import './App.css';
//import Focuslnput from './Components/Focuslnput';
import ClassTimer from './Components/ClassTimer'
import HookTimer from './Components/HookTimer';


function App() {
  return (
    
      <div className="App">
        {/*<Focuslnput/>*/}
        <ClassTimer/>
        <HookTimer/>
      </div>
    
  );
}

export default App;
