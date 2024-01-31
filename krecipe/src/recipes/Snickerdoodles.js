import React from 'react';
import React from 'react';
import './allrecipes.css';

const Snickerdoodles = () => {
    return (
        <div className="recipe">
            <div className="recipe-top">
                <img src="https://www.modernhoney.com/wp-content/uploads/2018/12/The-Best-Snickerdoodle-Cookie-Recipe-9jpg-1200x975.jpg" alt="Snickerdoodles" className="recipe-image" />
                <div className="recipe-vitals">
                    <h1 className="recipe-title">Snickerdoodles</h1>
                    <p className="recipe-description">These soft, chewy, tangy and buttery snickerdoodles will get eaten up in no time and leave you wanting more!</p>
                </div>
            </div>
            <h2 className="recipe-heading">Ingredients</h2>
            <ul className="recipe-list">
                <li>1 Cup of Unsalted Butter</li>
                <li>1 ¼ Cup of Sugar</li>
                <li>½ Cup of Brown Sugar</li>
                <li>2 Large Eggs</li>
                <li>2 Teaspoons of Vanilla Extract</li>
                <li>2 ¾ Cups of Flour</li>
                <li>2 Teaspoons of Cream of Tartar</li>
                <li>½ Teaspoon of Baking Soda</li>
                <li>1 Teaspoon of Salt</li>
                <li>2 ½ Teaspoons of Cinnamon</li>
            </ul>
            <h2 className="recipe-heading">Instructions</h2>
            <ol className="recipe-list">
                <li>Preheat your oven to 350 F, and line a baking sheet with parchment paper.</li>
                <li>In a large mixing bowl, stir together the butter (softened) with 1 cup of your sugar and all of your brown sugar until light and fluffy, about 5 minutes.</li>
                <li>Add in your eggs and vanilla extract, continuing to stir.</li>
                <li>Add in the flour, cream of tartar, baking soda, and salt, stirring until just combined.</li>
                <li>In a separate bowl, mix together the remaining ¼ cup of sugar with the cinnamon.</li>
                <li>Make your dough into golf ball sized globs, and one by one thoroughly roll them in the cinnamon sugar mixture before placing them on the baking sheet, gently pressing on them until they resemble more of a hockey puck.</li>
                <li>Bake for 8-10 minutes, or until the edges are set and the centers are still soft and puffy.</li>
            </ol>
        </div>
    );
};

export default Snickerdoodles;