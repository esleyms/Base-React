import React, { Component } from 'react';
import './App.css';
//import ClassCounterOne from './Components/ClassCounterOne';
import HookCounterOne from './Components/HookCounterOne';





class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<ClassCounterOne/>*/}
        <HookCounterOne/>
      </div>
    )
  }
}

export default App;

