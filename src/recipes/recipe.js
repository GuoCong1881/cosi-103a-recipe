import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Allrecipes.css';

const RecipePage = ({ recipe, addToGroceryList }) => {
    const [showBox, setShowBox] = useState(false);

    const handleClick = () => {
        setShowBox(!showBox);
    };

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
            <div className="centered-button">
                <button onClick={handleClick}>Moble Friendly Instructions</button>
                {showBox && (
                    <div className="box overlay">
                        <h2 className="recipe-heading">Instructions</h2>
                        <ControlledCarousel instructions={recipe.instructions} />
                    </div>
                )}
            </div>
        </div>
    );
};

function ControlledCarousel({ instructions }) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {instructions.map((instruction, index) => (
                <Carousel.Item key={index}>
                    <p>{instruction}</p>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default RecipePage;