import React from 'react';
import './Allrecipes.css';

const GrilledCheese = () => {
    return (
        <div className="recipe">
            <div className="recipe-top">
                <img src="https://natashaskitchen.com/wp-content/uploads/2021/08/Grilled-Cheese-Sandwich-3.jpg" alt="Grilled Cheese" className="recipe-image" />
                <div className="recipe-vitals">
                    <h1 className="recipe-title">Grilled Cheese</h1>
                    <p className="recipe-description">This grilled cheese will go great with literally anything and everything. It has just enough crunch to it while also being full of gooey goodness on the inside!</p>
                </div>
            </div>
                <h2 className="recipe-heading">Ingredients</h2>
                <ul className="recipe-list">
                    <li>2 Slices of Sourdough Bread</li>
                    <li>1 Tablespoon of Butter</li>
                    <li>1 Tablespoon of Mayonnaise</li>
                    <li>2 Slices of Cheddar Cheese</li>
                    <li>1 Slice of Monterey-Jack Cheese</li>
                </ul>
                <h2 className="recipe-heading">Instructions</h2>
                <ol className="recipe-list">
                    <li>Heat a large skillet over low heat, once hot, melt the butter in the pan.</li>
                    <li>Lightly spread the mayonnaise on one side of each of your slices of bread and one piece mayonnaise-side down in your pan.</li>
                    <li>Immediately place one slice of cheddar on top of that half of your sandwich, cover your pan, and allow to cook for 2-3 minutes.</li>
                    <li>Remove your half-grilled cheese concoction and let sit while you repeat the process with your other piece of bread and cheddar cheese.</li>
                    <li>Finally, add your slice of monterey-jack directly on top of your half of the sandwich already in the pan, immediately followed by the first half of your sandwich, let cook uncovered for 1 minute, before flipping and cooking another 1-2 minutes.</li>
                    <li>Once golden throughout, remove from heat, slice, and enjoy!</li>
                </ol>
        </div>
    );
};

export default GrilledCheese;