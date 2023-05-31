import React, { Component } from 'react';
import './App.css';
import ComponentC from './Components/ComponentC';
import { UserProvider } from './UserContext';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserProvider value="Vishwas">
          <ComponentC />
        </UserProvider>
      </div>
    );
  }
}

export default App;
