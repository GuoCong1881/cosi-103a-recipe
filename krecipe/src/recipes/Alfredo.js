import React from 'react';
import './allrecipes.css';

const Alfredo = () => {
    return (
        <div className="recipe">
            <div className="recipe-top">
                <img src="https://bellyfull.net/wp-content/uploads/2021/02/Chicken-Alfredo-blog-4.jpg" alt="Alfredo" className="recipe-image" />
                <div className="recipe-vitals">
                    <h1 className="recipe-title">Chicken Alfredo</h1>
                    <p className="recipe-description">This warm, hearty meal will keep you full and happy on a cold winter night, and impress your friends with an array of tastes for something deceptively simple looking.</p>
                </div>
            </div>
            <h2 className="recipe-heading">Ingredients</h2>
            <ul className="recipe-list">
                <li>16 Ounces of Fettuccine Pasta</li>
                <li>1 Pound of Chicken Breast (Boneless, Skinless)</li>
                <li>2 Teaspoons of Italian Seasoning</li>
                <li>2 Teaspoons of Salt</li>
                <li>1 Teaspoon of Pepper</li>
                <li>2 Tablespoons of Olive Oil</li>
                <li>½ Cup of Butter + 1 Tablespoon of Butter</li>
                <li>2 Cups of Heavy Cream</li>
                <li>2 Cloves of Garlic (Minced)</li>
                <li>1 Teaspoon of Garlic Powder</li>
                <li>1 Cup of Freshly Grated Parmesan</li>
            </ul>
            <h2 className="recipe-heading">Instructions</h2>
            <ol className="recipe-list">
                <li>Bring a pot of salted water to a boil, add your fettuccine, and cook about 10 minutes until al dente.</li>
                <li>Set aside ½ cup of pasta water for use later, before draining the pasta and letting it cool.</li>
                <li>Season your chicken breasts half each of your italian seasoning, salt, and pepper.</li>
                <li>Warm the olive oil in a large skillet until starting to bubble and evenly distributed.</li>
                <li>Add your chicken and let sit undisturbed for 5 - 7 minutes until golden brown on the bottom.</li>
                <li>Flip your chicken and add 1 tablespoon of butter, continuing to cook until golden brown.</li>
                <li>Transfer the chicken to some foil and let cool.</li>
                <li>In the still hot pan, add the rest of your butter and heavy cream, stirring until the butter has melted.</li>
                <li>Add to your pan the minced garlic, and the rest of your spices and stir until well combined.</li>
                <li>Stir in the parmesan cheese, adding a tablespoon of pasta water as need be to keep the sauce thin.</li>
                <li>Remove the sauce from the heat and immediately toss the sauce with the fettuccine in the skillet, before plating the pasta and topping with some of the sliced chicken, enjoy!</li>
            </ol>
        </div>
    );
};

export default Alfredo;