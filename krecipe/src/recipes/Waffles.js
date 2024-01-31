import React from 'react';
import React from 'react';
import './allrecipes.css';

const Waffles = () => {
    return (
        <div className="recipe">
            <img src="waffles.jpg" alt="Waffles" className="recipe-image" />
            <h1 className="recipe-title">Waffles</h1>
            <h2 className="recipe-heading">Description</h2>
            <p className="recipe-description">Insert your description here</p>
            <h2 className="recipe-heading">Ingredients</h2>
            <ul className="recipe-list">
                <li>Ingredient 1</li>
                <li>Ingredient 2</li>
                <li>Ingredient 3</li>
                {/* Add more ingredients as needed */}
            </ul>
            <h2 className="recipe-heading">Instructions</h2>
            <ol className="recipe-list">
                <li>Step 1</li>
                <li>Step 2</li>
                <li>Step 3</li>
                {/* Add more steps as needed */}
            </ol>
        </div>
    );
};

export default Waffles;
