import React, { Component } from 'react';
import './App.css';
//import CounterOne from './Components/CounterOne';
import CounterTwo from './Components/CounterTwo';


class App extends Component {
  render() {
    return (
      <div className="App">
       {/*<CounterOne/>*/}
       <CounterTwo/>
      </div>
    );
  }
}

export default App;
