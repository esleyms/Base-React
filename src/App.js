import React, { Component } from 'react';
import './App.css';
import RefsDemo from './Components/RefsDemo'
import FocusInput from './Components/FocusInput'
import FRInput from './Components/FRInput'
import FRParentInput from './Components/FRParentInput'

class App extends Component {
  render() {
    return (
      <div className="App">
       
       <FRParentInput/>
        {/*<FocusInput/>*/}
       {/* <RefsDemo />*/}
      </div>
    )
  }
}

export default App;

