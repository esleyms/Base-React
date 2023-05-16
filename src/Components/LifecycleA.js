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
  render() {
    
   console.log('LifecycleA render')
  }
  shouldComponentUpdate() {
    console.log('Lifecyclea ShouldComponentUpdate')
    return true
   
  }
        
  getSnapshotBeforeUpdate(prevProps, preState) {
    console.log('Lifecyclea getSnapshotBeforeUpdate')
   
    componentDidUpdate() {
      console.log('Lifecyclea componentDidUpdate' )
    }
  
}
 render() {
   console.log('LifecycleA render')
    return(
       <div>
          <div>Lifecycle A</div>
         <LifecycleB/>
       </div>
    )
  }

}
export default LifecycleA

