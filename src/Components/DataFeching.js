import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetching() {
  const [id, setId] = useState('');
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (id) {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
          setPost(res.data);
        })
        .catch(err => {
          if (err.response && err.response.status === 404) {
            console.log('Post not found');
          } else {
            console.log('Error:', err.message);
          }
        });
    }
  }, [id]);
  

  return (
    <div>
      <input type="text" value={id} onChange={e => setId(e.target.value)} />
      <div>{post && post.title}</div>
      {/*<ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
        </ul>*/}
    </div>
  );
}

export default DataFetching;

