import React from 'react';
import './Allrecipes.css';

const Waffles = () => {
    return (
        <div className="recipe">
            <div className="recipe-top">
                <img src="https://stordfkenticomedia.blob.core.windows.net/df-us/rms/media/recipemediafiles/recipes/retail/x17/2020_belgian-style-waffles_16700_600x600.jpg?ext=.jpg" alt="Waffles" className="recipe-image" />
                <div className="recipe-vitals">
                    <h1 className="recipe-title">Belgian Waffles</h1>
                    <p className="recipe-description">Do you like waffles? Well then you’ll love Belgian waffles! Belgian waffles are basically waffles 2.0, these thick, chewy, buttery discs of deliciousness will have you hooked from the first bite.</p>
                </div>
            </div>
            <h2 className="recipe-heading">Ingredients</h2>
            <ul className="recipe-list">
                <li>2 ¼ Cups Flour</li>
                <li>1 Tablespoon Baking Powder</li>
                <li>3 Tablespoons Sugar</li>
                <li>½ Teaspoon Salt</li>
                <li>1 Teaspoon Cinnamon</li>
                <li>2 Large Eggs, Separated</li>
                <li>½ Cup Vegetable Oil</li>
                <li>2 Cups Milk</li>
                <li>1 Teaspoon Vanilla Extract</li>
                <li>1 Cup Fresh Strawberries</li>
                <li>¼ Cup Powdered Sugar</li>
                <li>1 Bottle of Your Favorite Maple Syrup</li>
            </ul>
            <h2 className="recipe-heading">Instructions</h2>
            <ol className="recipe-list">
                <li>Preheat your waffle iron, spray with non-stick cooking spray, and set aside for later.</li>
                <li>Wash your strawberries, cut off the tops, and slice them vertically from top to bottom.</li>
                <li>In a large bowl, whisk together your flour, baking powder, sugar, salt, and cinnamon.</li>
                <li>In a separate bowl, beat the egg whites until stiff peaks form.</li>
                <li>In a third bowl, mix together the egg yolks, vegetable oil, milk, and vanilla extract.</li>
                <li>Stir the egg yolk mixture into the dry ingredients.</li>
                <li>Fold the egg whites into your batter.</li>
                <li>Pour your batter into the waffle iron and cook.</li>
                <li>Once your waffle is ready, top it with your fresh strawberries, favorite syrup, and a dose of powdered sugar. Enjoy!</li>
            </ol>
        </div>
    );
};

export default Waffles;
