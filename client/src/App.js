import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar.js";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import RecipePage from "./components/recipes/recipe.js";
import Team from "./components/About/Team.js";
import GroceryList from "./components/Grocery/Grocery.js";
import RecipeList from './components/RecipeList/RecipeList.js';
import axios from 'axios';

// This componennt represents the header section of the app
export function Header() {
  return (
    <div className="header-div">
      <h1 className="header">K's Kuisine Azure Full-Stack Test</h1> {/* Displaying the app name */}
    </div>
  );
}


// This component represents the recipe board section of the app
export function RecipeBoard({ recipes }) {
  return (
    /*
    <div className="recipe-board">
      <div className="image-container">
        {/* Displaying the first 4 recipe images }
        {recipes.slice(0, 4).map((recipe, index) => (
          <div key={index}>
            <img src={recipe.image} alt={recipe.name} />
          </div>
        ))}
      </div>
    </div>
    */
    <div className="recipe-board-col">
      {recipes.map((recipe, index) => (
        <div key={index} className="recipe-summary">
          <img src={recipe.image} alt={recipe.name} className="image-container" />
          <div className="recipe-description">
            <h2>{recipe.name}</h2>
            <p>{recipe.description}</p>
            <button onClick={() => window.location.href = recipe.link}>Go to Recipe</button>
          </div>
        </div>
      ))}
    </div>
  );
}

/**
 * Renders the heading for today's top recipes.
 * @returns {JSX.Element} The heading element.
 */
export function TopRecipes() {
  return <h2 className="top-recipes">Today's Top Recipes</h2>;
}

/**
 * Renders a recipe component.
 *
 * @param {Object} props - The props object.
 * @param {Object} props.recipe - The recipe object containing name, image, description, ingredients, and instructions.
 * @returns {JSX.Element} The recipe component.
 */
export function Recipe({ recipe }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="recipe" onClick={() => setShowDetails(!showDetails)}>
      <h3>{recipe.name}</h3>
      {showDetails && (
        <div>
          <img src={recipe.image} alt={recipe.name} />
          <p>{recipe.description}</p>
          <h4>Ingredients:</h4>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <p key={index}>{ingredient}</p>
            ))}
          </ul>
          <h4>Instructions:</h4> {/* Added header */}
          <ol>
            {recipe.instructions.map((instruction, index) => (
              <p key={index}>{instruction}</p>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}


/**
 * Represents the actual recipes and their components.
 * @returns {JSX.Element} The JSX element representing the App component.
 */
function App() {
  const [groceryList, setGroceryList] = useState([]);
  const addToGroceryList = (item) => {
    setGroceryList(groceryList => [...groceryList, item]);
  };

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const { data } = await axios.get('/api/recipes');
      setRecipes(data);
    };
    fetchRecipes();
  }, []);

  return (
    <div>
      <Router>
            <Navbar />
            <Routes>
                <Route path="/" exact element={
                  <>
                    <TopRecipes />
                    <RecipeBoard recipes={recipes} />
                  </>
                } />
                <Route path="/Groceries" element={<GroceryList groceryList={groceryList}/>} />
                {recipes.map((recipe, index) => (
                  <Route key={index} path={`/${recipe.link}`} element={<RecipePage recipe={recipe} addToGroceryList={addToGroceryList} />} />
                ))}
                <Route path="/About" element={<Team />} />
                <Route path="/add-recipes" element={<RecipeList />} />
              </Routes>
        </Router>
      <Header />

      
    </div>
  );
}

export default App;
