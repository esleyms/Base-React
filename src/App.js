import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import UserGreeting from './Components/UserGreeting';
import ParentComponent from './Components/ParentComponent'





class App extends Component {
  render() {
  return (
    <div className="App">
      
     <ParentComponent/>
     {/*<UserGreeting/>*/}

    </div>
  );
}
}
export default App;
