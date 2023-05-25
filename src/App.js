import React, { Component } from 'react';
import './App.css';
import ClickCounterTwo from './Components/ClickCounterTwo';
import HoverCounterTwo from './Components/HoverCounterTwo';
//import User from './Components/User';
import Counter from './Components/Counter';





class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter>
        {(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount}/>
          )}
        </Counter>
        <Counter>
        {(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount}/>
          )}
        </Counter>
   
      {/* <ClickCounterTwo/>
      <HoverCounterTwo/>
    <User render={(isLoggeIn) => isLoggeIn ?"Vishwas" : 'Guest'}/>*/}

      </div>
    )
  }
}

export default App;

