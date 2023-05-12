import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import UserGreeting from './Components/UserGreeting';
import ParentComponent from './Components/ParentComponent'
import NameList from './Components/NameList'
import Person from './Components/Person';





class App extends Component {
  render() {
  return (
    <div className="App">
      <NameList/>
      
      
      {/*<UserGreeting/>*/}
     {/*<ParentComponent/> Aula 15*/} 
     

    </div>
  );
}
}
export default App;
