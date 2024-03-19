const express = require('express');
const app = express();
const PORT = 5000;

let recipes = [
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
];

app.use(express.json()); // Middleware to parse JSON bodies

// GET endpoint to retrieve recipes
app.get('/api/recipes', (req, res) => {
  res.json(recipes);
});

// POST endpoint to add a new recipe
app.post('/api/recipes', (req, res) => {
  const recipe = req.body;
  // Basic validation for recipe format
  if (recipe && recipe.name && recipe.ingredients && recipe.instructions) {
    recipes.push(recipe);
    res.status(201).json(recipe);
  } else {
    res.status(400).json({ message: 'Invalid recipe format' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
