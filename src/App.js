import React, { Component } from 'react';
import './App.css';
//import HookMouse from './Components/HookMouse';
import IntervalHookCounter from './Components/IntervalHookCounter';


class App extends Component {
  render() {
    return (
      <div className="App">
       {/*<HookMouse/>*/}
       <IntervalHookCounter/>
      </div>  
    )
  }
}

export default App;

