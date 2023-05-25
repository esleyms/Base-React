import React, { Component } from 'react';
import './App.css';
import Hero from './Components/Hero'
import ErrorBoundary from './Components/ErrorBoundary'




class App extends Component {
  render() {
    return (
      <div className="App">
       <ErrorBoundary>
          <Hero heroName=" Bataman"/>
          <Hero heroName="Superman"/>
          <Hero heroName="joker"/>
       </ErrorBoundary>
      
      
      </div>
    )
  }
}

export default App;

