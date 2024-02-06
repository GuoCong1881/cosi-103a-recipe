import React from 'react';
import './Allrecipes.css';

const Hawaii = () => {
    return (
        <div className="recipe">
            <div className="recipe-top">
                <img src="https://www.yellowblissroad.com/wp-content/uploads/2014/06/One-Pan-Pineapple-Chicken-and-Rice-11.jpg" alt="Hawaii" className="recipe-image" />
                <div className="recipe-vitals">
                    <h1 className="recipe-title">Hawaiin Haystacks</h1>
                    <p className="recipe-description">This dish—not actually from hawaii—is the perfect combination of sweet and savory. You can enjoy it any time of year!</p>
                </div>
            </div>
            <h2 className="recipe-heading">Ingredients</h2>
            <ul className="recipe-list">
                <li>1 Pound of Chicken Breast (Deboned, Skinless)</li>
                <li>1 Half of a Whole Pineapple</li>
                <li>1 Clove of Garlic</li>
                <li>1 Cup of White Rice</li>
                <li>1 Cup of Chicken Broth</li>
                <li>1 Tablespoon of Olive Oil</li>
                <li>1 Teaspoon of Salt</li>
                <li>1 Teaspoon of Pepper</li>
            </ul>
            <h2 className="recipe-heading">Instructions</h2>
            <ol className="recipe-list">
                <li>First, remove the rind from your pineapple, before slicing it into quarters, removing the core, and chopping each quarter into bite size pieces.</li>
                <li>Cut your chicken into bite size pieces, and then season with salt and pepper, before adding to a hot skillet prepared with olive oil.</li>
                <li>Allow to cook undisturbed for 2 minutes, before turning and repeating the process.</li>
                <li>Add the cup of rice, cup of chicken broth, and the clove of garlic (crushed), and bring to a boil before covering and reducing the heat.</li>
                <li>Allow to cook for 20 minutes, at the halfway point, briefly lift the lid, add in your pineapple, and give it a quick stir.</li>
                <li>Once done cooking, remove from the heat and serve. Enjoy!</li>
            </ol>
        </div>
    );
};

export default Hawaii;
