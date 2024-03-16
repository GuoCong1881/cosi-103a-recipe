import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Allrecipes.css';

const RecipePage = ({ recipe, addToGroceryList }) => {
    const [showBox, setShowBox] = useState(false);

    const handleClick = () => {
        setShowBox(!showBox);
    };

    const handleHideBox = () => {
        setShowBox(false);
    };

    return (
        <div className="recipe">
            <div className="recipe-top">
                <img src={recipe.image} alt={recipe.name} className="recipe-image" />
                <div className="recipe-vitals">
                    <h1 className="recipe-title">{recipe.name}</h1>
                    <p className="recipe-description">{recipe.description}</p>
                    <button onClick={() => {
                        recipe.ingredients.forEach((ingredient) => addToGroceryList(ingredient));
                    }}>Add All Ingredients to Grocery List</button>
                </div>
            </div>
            <h2 className="recipe-heading">Ingredients</h2>
            <ul className="recipe-list">
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>
                        {ingredient}
                        <button onClick={() => {
                            const query = encodeURIComponent(ingredient);
                            const url = `https://api.nal.usda.gov/fdc/v1/foods/search?query=${query}&api_key=e17VMPLILvgWKT2kIWEJCdi5RZF3Sv7obN7dQfc5`;

                            fetch(url)
                                .then(response => response.json())
                                .then(data => {
                                    // Handle the API response data here
                                    console.log(data); // Display the entire API response data
                                    const firstFdcId = data.foods[0].fdcId; // Find the first fdcId number and store it
                                    console.log(`First fdcId: ${firstFdcId}`);
                                    // Make a second API call using the firstFdcId as an input parameter
                                    const url = `https://fdc.nal.usda.gov/fdc-app.html#/food-details/${firstFdcId}/nutrients`;
                                    console.log(url);
                                    window.open(url, '_blank'); // Open the URL in a new tab
                                })
                                .catch(error => {
                                    // Handle any errors that occur during the API request
                                    console.error(error);
                                });
                        }}>See Nutrition Info</button>
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
                <button onClick={handleClick}>Enter Cooking Mode</button>
                {showBox && (
                    <div className="box overlay">
                        <button className="hide-box-button" onClick={handleHideBox}>Exit Cooking Mode</button>
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
        <Carousel activeIndex={index} onSelect={handleSelect} controls={false} indicators={false}>
            {instructions.map((instruction, idx) => (
                <Carousel.Item key={idx}>
                    <p style={{ fontSize: '250%', margin: '-5px' }}>{instruction}</p>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default RecipePage;