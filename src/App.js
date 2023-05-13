import logo from './logo.svg'
import './App.css'
import { Component } from 'react'
import UserGreeting from './Components/UserGreeting'
import ParentComponent from './Components/ParentComponent'
import NameList from './Components/NameList'
import Person from './Components/Person'
import Stylessheet from './Components/Stylessheet'
import Inline from './Components/Inline'
import './appStyles.css'
import styles from './appStyles.module.css'
class App extends Component {
  render() {
  return (
    <div className="App">
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      <Inline/>
      {/*<Stylessheet primary={true}/>*/ }
      {/*<NameList/>*/}
      {/*<UserGreeting/>*/}
     {/*<ParentComponent/> Aula 15*/} 
     

    </div>
  );
}
}
export default App;
