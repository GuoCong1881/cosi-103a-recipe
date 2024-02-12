import React, { useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Alfredo from "./recipes/Alfredo";
import GrilledCheese from "./recipes/GrilledCheese";
import Snickerdoodles from "./recipes/Snickerdoodles";
import Waffles from "./recipes/Waffles";
import Smoothie from "./recipes/Smoothie";
import Hawaii from "./recipes/Hawaii";
import Souffle from "./recipes/Souffle";
import RecipePage from "./recipes/recipe";
import Team from "./components/About/Team";
import GroceryList from "./Grocery";



// This componennt represents the header section of the app
export function Header() {
  return (
    <div className="header-div">
      <h1 className="header">K's Kuisine</h1> {/* Displaying the app name */}
    </div>
  );
}



// This component represents the recipe board section of the app
export function RecipeBoard({ recipes }) {
  return (
    /*
    <div className="recipe-board">
      <div className="image-container">
        {/* Displaying the first 4 recipe images }
        {recipes.slice(0, 4).map((recipe, index) => (
          <div key={index}>
            <img src={recipe.image} alt={recipe.name} />
          </div>
        ))}
      </div>
    </div>
    */
    <div className="recipe-board-col">
      {recipes.map((recipe, index) => (
        <div key={index} className="recipe-summary">
          <img src={recipe.image} alt={recipe.name} className="image-container" />
          <div className="recipe-description">
            <h2>{recipe.name}</h2>
            <p>{recipe.description}</p>
            <button onClick={() => window.location.href = recipe.link}>Go to Recipe</button>
          </div>
        </div>
      ))}
    </div>
  );
}

/**
 * Renders the heading for today's top recipes.
 * @returns {JSX.Element} The heading element.
 */
export function TopRecipes() {
  return <h2 className="top-recipes">Today's Top Recipes</h2>;
}

/**
 * Renders a recipe component.
 *
 * @param {Object} props - The props object.
 * @param {Object} props.recipe - The recipe object containing name, image, description, ingredients, and instructions.
 * @returns {JSX.Element} The recipe component.
 */
export function Recipe({ recipe }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="recipe" onClick={() => setShowDetails(!showDetails)}>
      <h3>{recipe.name}</h3>
      {showDetails && (
        <div>
          <img src={recipe.image} alt={recipe.name} />
          <p>{recipe.description}</p>
          <h4>Ingredients:</h4>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <p key={index}>{ingredient}</p>
            ))}
          </ul>
          <h4>Instructions:</h4> {/* Added header */}
          <ol>
            {recipe.instructions.map((instruction, index) => (
              <p key={index}>{instruction}</p>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}


/**
 * Represents the actual recipes and their components.
 * @returns {JSX.Element} The JSX element representing the App component.
 */
function App() {
  const [groceryList, setGroceryList] = useState([]);
  const addToGroceryList = (item) => {
    setGroceryList([...groceryList, item]);
  };
  const recipes = [
    //This code right here is for the recipe board. You can change the images, instructions,
    //and ingredients in this section here. It is the blueprint for all recipes we have.
    {
      name: "Belgian Waffles",
      description: "Do you like waffles? Well then you’ll love Belgian waffles! Belgian waffles are basically waffles 2.0, these thick, chewy, buttery discs of deliciousness will have you hooked from the first bite.",
      ingredients: [
        "2 ¼ Cups Flour",
        "1 Tablespoon Baking Powder",
        "3 Tablespoons Sugar",
        "½ Teaspoon Salt",
        "1 Teaspoon Cinnamon",
        "2 Large Eggs, Separated",
        "½ Cup Vegetable Oil",
        "2 Cups Milk",
        "1 Teaspoon Vanilla Extract",
        "1 Cup Fresh Strawberries",
        "¼ Cup Powdered Sugar",
        "1 Bottle of Your Favorite Maple Syrup"
      ],
      instructions: [
      "Preheat your waffle iron, spray with non-stick cooking spray, and set aside for later.",
      "Wash your strawberries, cut off the tops, and slice them vertically from top to bottom.",
      "In a large bowl, whisk together your flour, baking powder, sugar, salt, and cinnamon.",
      "In a separate bowl, beat the egg whites until stiff peaks form.",
      "In a third bowl, mix together the egg yolks, vegetable oil, milk and vanilla extract.",
      "Stir the egg yolk mixture into the dry ingredients.",
      "Fold the egg whites into your batter.",
      "Pour your batter into the waffle iron and cook.",
      "Once your waffle is ready, top it with your fresh strawberries, favorite syrup, and a dose of powdered sugar. Enjoy!" ],

      image: "https://stordfkenticomedia.blob.core.windows.net/df-us/rms/media/recipemediafiles/recipes/retail/x17/2020_belgian-style-waffles_16700_600x600.jpg?ext=.jpg",
      link: "/Waffles"
    },
    {
      name: "Blueberry-Banana Smoothie",
      description: "Need a delicious and nutritious drink to jumpstart your day? Want to cool off with something sweet and healthy? This Blueberry-Banana smoothie is your perfect remedy! ",
      ingredients: [
        "1 Cup of Ice",
        "1 Cup of Plain Greek Yogurt",
        "½ Cup of Blueberries",
        "½ Cup of Raspberries",
        "½ Cup of Sliced Strawberries (Stems removed)",
        "2 Large Bananas",
        "2 Tablespoon Chia Seeds",
        "1 Teaspoon of Honey"
      ],
      instructions: [
        "Add your ice, yogurt, and bananas to the blender, and blend until just combined.",
        "Add the blueberries, raspberries, strawberries, chia seeds, and honey, and blend until smooth. Enjoy!"
      ],
      image: "https://lilluna.com/wp-content/uploads/2014/02/fruit-smoothie-resize-14.jpg",
      link: "/Smoothie"
    },
    {
      name: "Hawaiian Haystacks",
      description: "This dish—not actually from hawaii—is the perfect combination of sweet and savory. You can enjoy it any time of year!",
      ingredients: [
        "1 Pound of Chicken Breast (Deboned, Skinless)",
        "1 Half of a Whole Pineapple",
        "1 Clove of Garlic",
        "1 Cup of White Rice",
        "1 Cup of Chicken Broth",
        "1 Tablespoon of Olive Oil",
        "1 Teaspoon of Salt",
        "1 Teaspoon of Pepper"
        
      ],
      instructions: ["First, remove the rind from your pineapple, before slicing it into quarters, removing the core, and chopping each quarter into bite size pieces.",
        "Cut your chicken into bite size pieces, and then season with salt and pepper, before adding to a hot skillet prepared with olive oil.",
        "Allow to cook undisturbed for 2 minutes, before turning and repeating the process.",
        "Add the cup of rice, cup of chicken broth, and the clove of garlic (crushed), and bring to a boil before covering and reducing the heat.",
        "Allow to cook for 20 minutes, at the halfway point, briefly lift the lid, add in your pineapple, and give it a quick stir.",
        "Once done cooking, remove from the heat and serve. Enjoy!"]
        ,
      image: "https://www.yellowblissroad.com/wp-content/uploads/2014/06/One-Pan-Pineapple-Chicken-and-Rice-11.jpg",
      link: "/Hawaii"
    },
    {
      name: "The Best Grilled Cheese",
      description: "This grilled cheese will go great with literally anything and everything. It has just enough crunch to it while also being full of gooey goodness on the inside!",
      ingredients: [
        "2 Slices of Sourdough Bread",
        "1 Tablespoon of Butter",
        "1 Tablespoon of Mayonnaise",
        "2 Slices of Cheddar Cheese",
        "1 Slice of Monterey-Jack Cheese"
      ],
      instructions: [
        "Heat a large skillet over low heat, once hot, melt the butter in the pan.",
        "Lightly spread the mayonnaise on one side of each of your slices of bread and one piece mayonnaise-side down in your pan.",
        "Immediately place one slice of cheddar on top of that half of your sandwich, cover your pan, and allow to cook for 2-3 minutes.",
        "Remove your half-grilled cheese concoction and let sit while you repeat the process with your other piece of bread and cheddar cheese.",
        "Finally, add your slice of monterey-jack directly on top of your half of the sandwich already in the pan, immediately followed by the first half of your sandwich, let cook uncovered for 1 minute, before flipping and cooking another 1-2 minutes.",
        "Once golden throughout, remove from heat, slice, and enjoy!"
        
      ],
      image: "https://natashaskitchen.com/wp-content/uploads/2021/08/Grilled-Cheese-Sandwich-3.jpg",
      link: "/GrilledCheese"
    },
    {
      name: "Chicken Alfredo",
      description: "This warm, hearty meal will keep you full and happy on a cold winter night, and impress your friends with an array of tastes for something deceptively simple looking.",
      ingredients: [
        "16 Ounces of Fettuccine Pasta",
        "1 Pound of Chicken Breast (Boneless, Skinless)",
        "2 Teaspoons of Italian Seasoning",
        "2 Teaspoons of Salt",
        "1 Teaspoon of Pepper",
        "2 Tablespoons of Olive Oil",
        "½ Cup of Butter + 1 Tablespoon of Butter",
        "2 Cups of Heavy Cream",
        "2 Cloves of Garlic (Minced)",
        "1 Teaspoon of Garlic Powder",
        "1 Cup of Freshly Grated Parmesan"
        
      ],
      instructions: ["Bring a pot of salted water to a boil, add your fettuccine, and cook about 10 minutes until al dente.",
      "Set aside ½ cup of pasta water for use later, before draining the pasta and letting it cool.",
      "Season your chicken breasts half each of your italian seasoning, salt, and pepper.",
      "Warm the olive oil in a large skillet until starting to bubble and evenly distributed.",
      "Add your chicken and let sit undisturbed for 5 - 7 minutes until golden brown on the bottom.",
      "Flip your chicken and add 1 tablespoon of butter, continuing to cook until golden brown.",
      "Transfer the chicken to some foil and let cool.",
      "In the still hot pan, add the rest of your butter and heavy cream, stirring until the butter has melted.",
      "Add to your pan the minced garlic, and the rest of your spices and stir until well combined.",
      "Stir in the parmesan cheese, adding a tablespoon of pasta water as need be to keep the sauce thin.",
      "Remove the sauce from the heat and immediately toss the sauce with the fettuccine in the skillet, before plating the pasta and topping with some of the sliced chicken, enjoy!"],
      image: "https://bellyfull.net/wp-content/uploads/2021/02/Chicken-Alfredo-blog-4.jpg",
      link: "/Alfredoooooo"
    },
    {
      name: "Snickerdoodles",
      description: "These soft, chewy, tangy and buttery snickerdoodles will get eaten up in no time and leave you wanting more!",
      ingredients: [
        "1 Cup of Unsalted Butter",
        "1 ¼ Cup of Sugar",
        "½ Cup of Brown Sugar",
        "2 Large Eggs",
        "2 Teaspoons of Vanilla Extract",
        "2 ¾ Cups of Flour",
        "2 Teaspoons of Cream of Tartar",
        "½ Teaspoon of Baking Soda",
        "1 Teaspoon of Salt",
        "2 ½ Teaspoons of Cinnamon"
      ],
      instructions: ["Preheat your oven to 350 F, and line a baking sheet with parchment paper.",
        "In a large mixing bowl, stir together the butter (softened) with 1 cup of your sugar and all of your brown sugar until light and fluffy, about 5 minutes.",
        "Add in your eggs and vanilla extract, continuing to stir.",
        "Add in the flour, cream of tartar, baking soda, and salt, stirring until just combined.",
        "In a separate bowl, mix together the remaining ¼ cup of sugar with the cinnamon.",
        "Make your dough into golf ball sized globs, and one by one thoroughly roll them in the cinnamon sugar mixture before placing them on the baking sheet, gently pressing on them until they resemble more of a hockey puck.",
        "Sprinkle the tops of them with any remaining cinnamon-sugar mixture and bake for 10 - 11 minutes. Enjoy! (Let cool completely before removing from pan, or you risk your cookies falling apart)"],
      image: "https://www.modernhoney.com/wp-content/uploads/2018/12/The-Best-Snickerdoodle-Cookie-Recipe-9jpg-1200x975.jpg",
      link: "/Snickerdoodles"
    },
    {
      name: "Raspberry Soufflé",
      description: "Want a delicious—although admittedly not easy to make—treat will impress your friends and taste buds alike? Look no further than this wonderful recipe!",
      ingredients: [
        "1 ½ Cups Raspberries",
        "½ Cup of Sugar",
        "2 Teaspoons of Cornstarch",
        "2 Teaspoons of Water",
        "4 Large Eggs, Separated",
        "1 Tablespoon Unsalted Butter",
        "1 Lemon"
      ],
      instructions: ["Preheat the oven to 400 F and grease your ramekins with butter.",
      "In a medium saucepan, combine 1 cup of raspberries with ¼ cup of sugar and heat on low, stirring frequently, until the sugar is dissolved.",
      "In a bowl, whisk together your egg yolks, the remaining sugar, and cornstarch.",
      "Once combined, pour the raspberry mixture through a sieve and into a bowl, before adding the juice of one lemon, and stirring.",
      "In a separate bowl, gently whisk together the egg whites until peaks form, at which point gently fold the egg whites into the mixture, a third at a time.",
      "Gently pour your mixture into the buttered ramekins, being sure not to fill them past the brim, and bake for 15 minutes.",
      "Remove from the oven, garnish with the remaining raspberries, and enjoy!"],
      image: "https://www.abeautifulplate.com/wp-content/uploads/2014/06/raspberry-souffle-1-3.jpg",
      link: "/Souffle"
    },
  ];

  return (
    <div>
      <Router>
            <Navbar />
            <Routes>
                <Route path="/" exact element={
                  <>
                    <TopRecipes />
                    <RecipeBoard recipes={recipes} />
                  </>
                } />
                <Route path="/Groceries" element={<GroceryList groceryList={groceryList}/>} />
                {recipes.map((recipe, index) => (
                  <Route key={index} path={`/${recipe.link}`} element={<RecipePage recipe={recipe} addToGroceryList={addToGroceryList} />} />
                ))}
                <Route path="/About" element={<Team />} />
              </Routes>
        </Router>
      <Header />

      
    </div>
  );
}

export default App;