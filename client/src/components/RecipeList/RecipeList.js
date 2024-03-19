import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecipeForm from './RecipeForm';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const { data } = await axios.get('/api/recipes');
      console.log('Response data:', data); 
      setRecipes(data);
    };
    fetchRecipes();
  }, []);

  return (
    <div>
      <h1>All Recipes</h1>
      <RecipeForm setRecipes={setRecipes} />
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index}>{recipe.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
