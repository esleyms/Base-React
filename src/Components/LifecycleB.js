import React, { Component } from 'react'


class LifecycleB extends Component {
constructor(props) {
  super(props)

  this.state = {
     name: "Vishwas"
  }
    console.log('lifecycleB constructor')
}
    static getDerivedStateFromProps(props,state) {
        console.log('LifegetDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('ifegetDerivedStateFromProps')
    }
  render() {
    
        console.log('LLifecycleB render')
    
    return  <div>Lifecycle B</div>

  }
}

export default LifecycleB

