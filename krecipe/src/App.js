import React, { useState } from 'react';
import './App.css';


function Header() {
  return <h1 className="header">K's Kuisine</h1>;
}

function RecipeBoard({ recipes }) {
  return (
    <div className="recipe-board">
      {recipes.map((recipe, index) => (
        <div key={index}>
          <img src={recipe.image} alt={recipe.name} />
          <p>{recipe.name}</p>
        </div>
      ))}
    </div>
  );
}

function TopRecipes() {
  return <h2 className="top-recipes">Today's Top Recipes</h2>;
}

function Recipe({ recipe }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="recipe" onClick={() => setShowDetails(!showDetails)}>
      <h3>{recipe.name}</h3>
      {showDetails && (
        <div>
          <img src={recipe.image} alt={recipe.name} />
          <p>{recipe.description}</p>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <p>{recipe.instructions}</p>
        </div>
      )}
    </div>
  );
}

function RecipeList({ recipes }) {
  return (
    <div className="recipe-list">
      {recipes.map((recipe, index) => (
        <Recipe key={index} recipe={recipe} />
      ))}
    </div>
  );
}

function App() {
  const recipes = [
    {
      name: "Spaghetti Bolognese",
      description: "A classic Italian dish with a meaty, tomato sauce.",
      ingredients: [
        "200g spaghetti",
        "1 tbsp olive oil",
        "1 onion, chopped",
        "2 cloves of garlic, minced",
        "200g ground beef",
        "400g canned tomatoes",
        "Salt and pepper to taste"
      ],
      instructions: "Cook the spaghetti according to the package instructions. Meanwhile, heat the olive oil in a pan and sauté the onion and garlic until soft. Add the ground beef and cook until browned. Add the tomatoes, salt, and pepper, and simmer for 15 minutes. Drain the spaghetti and serve with the sauce.",
      image: "https://www.slimmingeats.com/blog/wp-content/uploads/2010/04/spaghetti-bolognese-32.jpg"
    },
    {
      name: "Fried Chicken",
      description: "A classic Italian dish with a meaty, tomato sauce.",
      ingredients: [
        "200g spaghetti",
        "1 tbsp olive oil",
        "1 onion, chopped",
        "2 cloves of garlic, minced",
        "200g ground beef",
        "400g canned tomatoes",
        "Salt and pepper to taste"
      ],
      instructions: "Cook the spaghetti according to the package instructions. Meanwhile, heat the olive oil in a pan and sauté the onion and garlic until soft. Add the ground beef and cook until browned. Add the tomatoes, salt, and pepper, and simmer for 15 minutes. Drain the spaghetti and serve with the sauce.",
      image: "https://www.foodandwine.com/thmb/JvZKHzwU7bkJFUrU4-1g0Xyz7Bw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/FAW-recipes-crispy-buttermilk-fried-chicken-hero-01-3ccf6b983f47453192382073464fa7a5.jpg"
    }
  ];

  return (
    <div>
      <Header />
      <RecipeBoard recipes={recipes} />
      <TopRecipes />
      <RecipeList recipes={recipes} />
    </div>
  );
}




export default App;