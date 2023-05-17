import React, { Component } from 'react'
import LifecycleB from './LifecycleB'


class LifecycleA extends Component {
  constructor(props) {
   super(props)

    this.state = {
      name: "Vishwas"
    }
    console.log('LifecycleA constructor')
  }

  static getDerivedStateFromProps(props,state) {
    console.log('LifegetDerivedStateFromProps')
   return null
    }

    componentDidMount() {
      console.log('ifegetDerivedStateFromProps')
    }
  
   shouldComponentUpdate() {
     console.log('Lifecyclea ShouldComponentUpdate')
     return true
   
    }
        
   getSnapshotBeforeUpdate(prevProps, preState) {
    console.log('Lifecyclea getSnapshotBeforeUpdate')
    return null
   }
    componentDidUpdate() {
      console.log('LifecycleaA componentDidUpdate')
    }
     changeState = () => {
      this.setState ({
        name: 'Codevoluntion'
      })
     }

 render() {
   console.log('LifecycleA render')
    return(
       <div>
          <div>Lifecycle A</div>
          <button onClick={this.changeState}>Change state</button>
         <LifecycleB/>
       </div>
    )
  }

}
export default LifecycleA

