import React, { useState } from 'react';

function UserRecipe() {
    const [recipe, setRecipe] = useState('');
    const [recipeQueue, setRecipeQueue] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const handleRecipeChange = (event) => {
        setRecipe(event.target.value);
    };

    const handleAddRecipe = () => {
        try {
            const parsedRecipe = JSON.parse(recipe);
            setRecipeQueue((prevQueue) => [...prevQueue, parsedRecipe]);
            console.log(parsedRecipe);
            setErrorMessage('');
        } catch (error) {
            setErrorMessage('Invalid JSON format');
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

            {errorMessage && <p>{errorMessage}</p>}

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
