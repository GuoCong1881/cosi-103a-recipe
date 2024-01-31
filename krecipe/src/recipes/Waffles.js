import React from 'react';
import React from 'react';
import './allrecipes.css';

const Waffles = () => {
    return (
        <div className="recipe">
            <div className="recipe-top">
      image: "https://stordfkenticomedia.blob.core.windows.net/df-us/rms/media/recipemediafiles/recipes/retail/x17/2020_belgian-style-waffles_16700_600x600.jpg?ext=.jpg"
                <img src="" alt="Waffles" className="recipe-image" />
                <div className="recipe-vitals">
                    <h1 className="recipe-title">Belgian Waffles</h1>
                    <p className="recipe-description">Do you like waffles? Well then you’ll love Belgian waffles! Belgian waffles are basically waffles 2.0, these thick, chewy, buttery discs of deliciousness will have you hooked from the first bite.</p>
                </div>
            </div>
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
