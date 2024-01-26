import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders recipe list', () => {
  const recipes = [
    { id: 1, name: 'Recipe 1' },
    { id: 2, name: 'Recipe 2' },
    { id: 3, name: 'Recipe 3' },
  ];
  render(<RecipeList recipes={recipes} />);
  const recipeListElement = screen.getByTestId('recipe-list');
  expect(recipeListElement).toBeInTheDocument();
});

test('renders correct number of recipes', () => {
  const recipes = [
    { id: 1, name: 'Recipe 1' },
    { id: 2, name: 'Recipe 2' },
    { id: 3, name: 'Recipe 3' },
  ];
  render(<RecipeList recipes={recipes} />);
  const recipeElements = screen.getAllByTestId('recipe');
  expect(recipeElements.length).toBe(recipes.length);
});import { render, screen } from '@testing-library/react';

test('renders recipe details when clicked', () => {
  const recipe = {
    id: 1,
    name: 'Recipe 1',
    image: 'recipe1.jpg',
    description: 'This is Recipe 1',
    ingredients: ['Ingredient 1', 'Ingredient 2'],
    instructions: ['Step 1', 'Step 2'],
  };
  render(<Recipe recipe={recipe} />);
  const recipeElement = screen.getByText(recipe.name);
  expect(recipeElement).toBeInTheDocument();

  // Click on the recipe to show details
  recipeElement.click();

  const imageElement = screen.getByAltText(recipe.name);
  expect(imageElement).toBeInTheDocument();

  const descriptionElement = screen.getByText(recipe.description);
  expect(descriptionElement).toBeInTheDocument();

  const ingredientsHeaderElement = screen.getByText('Ingredients:');
  expect(ingredientsHeaderElement).toBeInTheDocument();

  const ingredientsElements = screen.getAllByRole('listitem');
  expect(ingredientsElements.length).toBe(recipe.ingredients.length);

  const instructionsHeaderElement = screen.getByText('Instructions:');
  expect(instructionsHeaderElement).toBeInTheDocument();

  const instructionsElements = screen.getAllByRole('listitem');
  expect(instructionsElements.length).toBe(recipe.instructions.length);
});