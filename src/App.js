import React, { Component } from 'react';
import './App.css';
//import PostList from './Components/PostList';
import PostForm from './Components/PostForm';


class App extends Component {
  render() {
    return (
      <div className="App">

        <PostForm/>

       {/*<PostList/>*/}
      </div>
    )
  }
}

export default App;

