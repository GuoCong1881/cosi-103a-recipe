import React from 'react';
import './allrecipes.css';

const Smoothie = () => {
    return (
        <div className="recipe">
            <div className="recipe-top">
                <img src="https://lilluna.com/wp-content/uploads/2014/02/fruit-smoothie-resize-14.jpg" alt="Smoothie" className="recipe-image" />
                <div className="recipe-vitals">
                    <h1 className="recipe-title">Blueberry-Banana Smoothie</h1>
                    <p className="recipe-description">Need a delicious and nutritious drink to jumpstart your day? Want to cool off with something sweet and healthy? This Blueberry-Banana smoothie is your perfect remedy! </p>
                </div>
            </div>
            <h2 className="recipe-heading">Ingredients</h2>
            <ul className="recipe-list">
                <li>1 Cup of Ice</li>
                <li>1 Cup of Plain Greek Yogurt</li>
                <li>½ Cup of Blueberries</li>
                <li>½ Cup of Raspberries</li>
                <li>½ Cup of Sliced Strawberries (Stems removed)</li>
                <li>2 Large Bananas</li>
                <li>2 Tablespoon Chia Seeds</li>
                <li>1 Teaspoon of Honey</li>
            </ul>
            <h2 className="recipe-heading">Instructions</h2>
            <ol className="recipe-list">
                <li>Add your ice, yogurt, and bananas to the blender, and blend until just combined.</li>
                <li>Add the blueberries, raspberries, strawberries, chia seeds, and honey, and blend until smooth. Enjoy!</li>
            </ol>
        </div>
    );
};

export default Smoothie;