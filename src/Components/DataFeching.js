import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetching() {
  const [id, setId] = useState('');
  const [post, setPost] = useState(null);
  const [IdFromButtonClick, setIdFromButtonClick] = useState(1);
  const [error, setError] = useState(null);

  const handleClick = () => {
    if (!id || isNaN(id)) {
      setError('ID inválido');
      return;
    }

    setIdFromButtonClick(id);
    setError(null);
  }

  useEffect(() => {
    if (id) {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${IdFromButtonClick}`)
        .then(res => {
          setPost(res.data);
          setError(null);
        })
        .catch(err => {
          if (err.response && err.response.status === 404) {
            setError('Post não encontrado');
          } else {
            setError('Erro ao buscar o post');
          }
        });
    }
  }, [id, IdFromButtonClick]); // Adicionando 'id' como dependência

  return (
    <div>
      <input type="text" value={id} onChange={e => setId(e.target.value)} />
      <button type="button" onClick={handleClick}>Fetch Post</button>
      {error && <div>{error}</div>}
      <div>{post && post.title}</div>
    </div>
  );
}

export default DataFetching;
