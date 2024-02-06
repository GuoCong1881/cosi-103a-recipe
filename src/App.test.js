import { render, screen, fireEvent} from '@testing-library/react';
import {Header, RecipeBoard, TopRecipes, Recipe} from './App';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders header component', () => {
  render(<Header />);
  const header = screen.getByText(/K's Kuisine/i);
  expect(header).toBeInTheDocument();
});

test('renders top recipe', () => {
  render(<TopRecipes />);
  const topRecipe = screen.getByText(/Today's Top Recipes/i);
  expect(topRecipe).toBeInTheDocument();
});

test('renders recipe board with recipes', () => {
  const recipes = [
    { name: 'Recipe 1', description: 'Description 1', image: 'image1.jpg', link: 'link1' },
    { name: 'Recipe 2', description: 'Description 2', image: 'image2.jpg', link: 'link2' },
  ];

  render(<RecipeBoard recipes={recipes} />);

  recipes.forEach(recipe => {
    expect(screen.getByAltText(recipe.name)).toBeInTheDocument();
    expect(screen.getByText(recipe.name)).toBeInTheDocument();
    expect(screen.getByText(recipe.description)).toBeInTheDocument();
  });
});

test('renders recipe and toggles details on click', () => {
  const recipe = {
    name: 'Test Recipe',
    image: 'test-image.jpg',
    description: 'Test Description',
    ingredients: ['Ingredient 1', 'Ingredient 2'],
    instructions: ['Instruction 1', 'Instruction 2'],
  };

  render(<Recipe recipe={recipe} />);

  // Check that the recipe name is rendered
  expect(screen.getByText(recipe.name)).toBeInTheDocument();

  // Check that the details are not rendered initially
  expect(screen.queryByText(recipe.description)).not.toBeInTheDocument();

  // Click the recipe to show details
  fireEvent.click(screen.getByText(recipe.name));

  // Check that the details are now rendered
  expect(screen.getByText(recipe.description)).toBeInTheDocument();
  recipe.ingredients.forEach(ingredient => {
    expect(screen.getByText(ingredient)).toBeInTheDocument();
  });
  recipe.instructions.forEach(instruction => {
    expect(screen.getByText(instruction)).toBeInTheDocument();
  });

  // Click the recipe again to hide details
  fireEvent.click(screen.getByText(recipe.name));

  // Check that the details are not rendered anymore
  expect(screen.queryByText(recipe.description)).not.toBeInTheDocument();
});

test('renders App and checks routing', () => {
  render(
    <App />
  );

  // Check that the Navbar and Header are rendered
  expect(screen.getByRole('navigation')).toBeInTheDocument();

  // Check that the TopRecipes and RecipeBoard are rendered for the "/" route
  expect(screen.getByText(/Today's Top Recipes/i)).toBeInTheDocument();
  expect(screen.getByText(/K's Kuisine/i)).toBeInTheDocument();
  expect(screen.getByText(/Home/i)).toBeInTheDocument();
  expect(screen.getByText(/About/i)).toBeInTheDocument();
  // Add more checks for other routes as needed
  const navs = screen.getAllByRole('navigation');
  expect(navs).toHaveLength(1);

  const headings = screen.getAllByRole('heading');
  expect(headings).toHaveLength(9);
  expect(screen.getByText('Belgian Waffles', { container: headings[1] })).toBeInTheDocument();

  const links = screen.getAllByRole('link');
  expect(links).toHaveLength(2);
  expect(screen.getByText('Home', { container: links[0] })).toBeInTheDocument();
  expect(screen.getByText('About', { container: links[1] })).toBeInTheDocument();
  // Check that the first team member's details are correct

});