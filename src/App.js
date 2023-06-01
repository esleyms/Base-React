import React, { Component } from 'react';
import './App.css';
//import CounterOne from './Components/CounterOne';
import CounterTwo from './Components/CounterTwo';
import CounterThree from './Components/CounterThree';


class App extends Component {
  render() {
    return (
      <div className="App">
       {/*<CounterOne/>*/}
      {/* <CounterTwo/>*/}
      <CounterThree/>
      </div>
    );
  }
}

export default App;
