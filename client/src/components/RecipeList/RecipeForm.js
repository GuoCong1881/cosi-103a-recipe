import React, { useState } from 'react';
import axios from 'axios';

const RecipeForm = ({ setRecipes }) => {
  const [recipeJson, setRecipeJson] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const recipe = JSON.parse(recipeJson);
      recipe.image = recipe.image || 'https://montevista.greatheartsamerica.org/wp-content/uploads/sites/2/2016/11/default-placeholder-375x375.png';
      recipe.link = recipe.link || recipe.name.toLowerCase().replace(/\s+/g, '-');
      await axios.post('/api/recipes', recipe);
      setRecipes((prevRecipes) => [...prevRecipes, recipe]);
      setRecipeJson('');
      alert('Recipe added successfully!');
    } catch (error) {
      console.log('Failed to parse JSON:', recipeJson); // print the JSON string
      console.log('Error:', error); // print the error object
      alert('Failed to add recipe. Make sure the JSON format is correct.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={recipeJson}
        onChange={(e) => setRecipeJson(e.target.value)}
        rows="10"
        cols="50"
        placeholder="Enter recipe in JSON format"
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default RecipeForm;
