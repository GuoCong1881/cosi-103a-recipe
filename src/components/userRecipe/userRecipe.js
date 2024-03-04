import React, { useState } from 'react';

function UserRecipe() {
    const [recipe, setRecipe] = useState('');
    const [recipeQueue, setRecipeQueue] = useState([]);

    const handleRecipeChange = (event) => {
        setRecipe(event.target.value);
    };

    const handleAddRecipe = () => {
        try {
            const parsedRecipe = JSON.parse(recipe);
            setRecipeQueue((prevQueue) => [...prevQueue, parsedRecipe]);
            console.log(parsedRecipe);
        } catch (error) {
            console.error('Invalid JSON format');
        }
    };

    return (
        <div>
            <textarea
                value={recipe}
                onChange={handleRecipeChange}
                placeholder="Enter raw JSON for recipe"
            />
            <button onClick={handleAddRecipe}>Add Recipe</button>

            <h2>Recipe Queue:</h2>
            <ul>
                {recipeQueue.map((recipe, index) => (
                    <li key={index}>{JSON.stringify(recipe)}</li>
                ))}
            </ul>
        </div>
    );
}

export default UserRecipe;
