import React, {Component} from 'react'
import './App.css'
import LifecycleA from './Components/LifecycleA'
import LifecycleB from './Components/LifecycleB';
class App extends Component {
  render() {
  return (
    <div className="App">
    
   <LifecycleA/>
   <LifecycleB/>

    </div>
  );
}
}
export default App;
