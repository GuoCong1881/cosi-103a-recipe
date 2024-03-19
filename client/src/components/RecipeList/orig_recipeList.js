import React, { useEffect, useState } from 'react';

function OrigRecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [newRecipe, setNewRecipe] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/api/recipes')
      .then(response => response.json())
      .then(setRecipes);
  }, []);

  const addRecipe = () => {
    try {
      const recipe = JSON.parse(newRecipe); // Parse the new recipe JSON
  
      fetch('http://127.0.0.1:8000/api/recipes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(recipe),
      })
      .then(response => {
        console.log('Status code:', response.status); // Log the status code
        if (!response.ok) {
          return response.text().then(error => { throw new Error(error); }); // Log the server's error message
        }
        if (!response.headers.get('Content-Type').includes('application/json')) {
          throw new Error('Server did not return JSON');
        }
        return response.json();
      })
        .then(data => {
          setRecipes(prevRecipes => [...prevRecipes, data]); // Add the new recipe to the recipes list
          setNewRecipe(''); // Clear the new recipe textarea
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
          setError('There was a problem adding the recipe. Please try again.');
        });
    } catch (error) {
      setError('Invalid JSON format.');
    }
  };

  return (
    <div>
      {recipes.map(recipe => (
        <div key={recipe.name}>
          <h2>{recipe.name}</h2>
          <p>{recipe.description}</p>
          {/* Render other recipe details... */}
        </div>
      ))}
      <textarea value={newRecipe} onChange={e => setNewRecipe(e.target.value)} />
      <button onClick={addRecipe}>Add Recipe</button>
      {error && <p>{error}</p>}
    </div>
  );
}

export default OrigRecipeList;