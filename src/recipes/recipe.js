import React from 'react';
import './Allrecipes.css';

const RecipePage = ({ recipe, addToGroceryList }) => {
    return (
        <div className="recipe">
            <div className="recipe-top">
                <img src={recipe.image} alt={recipe.name} className="recipe-image" />
                <div className="recipe-vitals">
                    <h1 className="recipe-title">{recipe.name}</h1>
                    <p className="recipe-description">{recipe.description}</p>
                </div>
            </div>
            <h2 className="recipe-heading">Ingredients</h2>
            <ul className="recipe-list">
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>
                        {ingredient}
                        <button onClick={() => addToGroceryList(ingredient)}>Add to Grocery List</button>
                    </li>
                ))}
            </ul>
            <h2 className="recipe-heading">Instructions</h2>
            <ol className="recipe-list">
                {recipe.instructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                ))}
            </ol>
        </div>
    );
};

export default RecipePage;