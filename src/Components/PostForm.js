import React, { Component } from 'react';
import axios from 'axios';

class PostForm extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      userID: '',
      title: '',
      body: ''
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post('https://jsonplaceholder.typicode.com/posts', this.state)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
  
  render() {
    const { userID, title, body } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <input 
              type='text' 
              name='userID' 
              value={userID} 
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input 
              type='text'
              name='title'
              value={title}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type='text'
              name='body' 
              value={body} 
              onChange={this.changeHandler}
            />
          </div>
          <button type='submit'>Enviar</button>
        </form>
      </div>
    );
  }
}

export default PostForm;

