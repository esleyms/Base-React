import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts: []
      }
    }
    
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(Response => {
            console.log(Response)
            this.setState({posts: Response.data})
        })
        .catch(error => {
            console.error(error)
            
        })
    }    

  render() {
    const {posts} = this.state
    return (
      <div>
        List os posts
        {
            posts.length ?
            posts.map(post => <div key={post.id}> {post.title} </div>) :
            null
        }
      </div>
    )
  }
}

export default PostList
