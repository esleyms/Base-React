import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'

class ParentComp extends Component {
    
    constructor(props){
        super(props)
        this.state = {
           name:'Vishams' 
        }
    }
    
    componentDidMount() {
        setInterval(() =>{
            this.setState({
                name:'Vishwas'
        }, 2000)})
    }


  render() {
    return (
      <div>
        Parent Component {this.props.name}
        <RegComp name={this.state.name}/>
        <PureComp name={this.state.name}/>
      </div>
    )
  }
}

export default ParentComp
