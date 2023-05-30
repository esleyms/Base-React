import React, { Component } from 'react';
import './App.css';
import ClassCounter from './Components/ClassCounter';
import HookCounter from './Components/HookCounter';



class App extends Component {
  render() {
    return (
      <div className="App">

     {/*<ClassCounter/>*/}
     <HookCounter/>
      </div>
    )
  }
}

export default App;

