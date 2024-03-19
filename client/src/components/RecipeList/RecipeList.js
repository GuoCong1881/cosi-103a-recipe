import React, { useEffect, useState } from 'react';
import axios from 'axios';

function RecipeList() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('/api/test')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setMessage('Error connecting to the backend');
      });
  }, []);

  return (
    <div>
      <h1>Test Connection</h1>
      <p>{message}</p>
    </div>
  );
}

export default RecipeList;
