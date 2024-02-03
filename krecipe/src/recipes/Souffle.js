import React from 'react';
import './allrecipes.css';

const Souffle = () => {
    return (
        <div className="recipe">
            <div className="recipe-top">
                <img src="https://www.abeautifulplate.com/wp-content/uploads/2014/06/raspberry-souffle-1-3.jpg" alt="Souffle" className="recipe-image" />
                <div className="recipe-vitals">
                    <h1 className="recipe-title">Raspberry Soufflé</h1>
                    <p className="recipe-description">Want a delicious—although admittedly not easy to make—treat will impress your friends and taste buds alike? Look no further than this wonderful recipe!</p>
                </div>
            </div>
            <h2 className="recipe-heading">Ingredients</h2>
            <ul className="recipe-list">
                <li>1 ½ Cups Raspberries</li>
                <li>½ Cup of Sugar</li>
                <li>2 Teaspoons of Cornstarch</li>
                <li>2 Teaspoons of Water</li>
                <li>4 Large Eggs, Separated</li>
                <li>1 Tablespoon Unsalted Butter</li>
                <li>1 Lemon</li>
            </ul>
            <h2 className="recipe-heading">Instructions</h2>
            <ol className="recipe-list">
                <li>Preheat the oven to 400 F and grease your ramekins with butter.</li>
                <li>In a medium saucepan, combine 1 cup of raspberries with ¼ cup of sugar and heat on low, stirring frequently, until the sugar is dissolved.</li>
                <li>In a bowl, whisk together your egg yolks, the remaining sugar, and cornstarch.</li>
                <li>Once combined, pour the raspberry mixture through a sieve and into a bowl, before adding the juice of one lemon, and stirring.</li>
                <li>In a separate bowl, gently whisk together the egg whites until peaks form, at which point gently fold the egg whites into the mixture, a third at a time.</li>
                <li>Gently pour your mixture into the buttered ramekins, being sure not to fill them past the brim, and bake for 15 minutes.</li>
                <li>Remove from the oven, garnish with the remaining raspberries, and enjoy!</li>
            </ol>
        </div>
    );
};

export default Souffle;