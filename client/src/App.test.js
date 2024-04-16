import { render, screen } from '@testing-library/react';
import axios from 'axios';
import App, { Header, RecipeBoard, TopRecipes, Recipe } from './App';

jest.mock('axios');

test('renders Header', () => {
  render(<Header />);
  const linkElement = screen.getByText(/K's Kuisine Azure Full-Stack Test/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders RecipeBoard', () => {
  const recipes = [
    { name: 'Test Recipe', image: 'test.jpg', description: 'Test Description', link: 'test-link' },
  ];
  render(<RecipeBoard recipes={recipes} />);
  const linkElement = screen.getByText(/Test Recipe/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders TopRecipes', () => {
  render(<TopRecipes />);
  const linkElement = screen.getByText(/Today's Top Recipes/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Recipe', () => {
  const recipe = { name: 'Test Recipe', image: 'test.jpg', description: 'Test Description', ingredients: ['Test Ingredient'], instructions: ['Test Instruction'] };
  render(<Recipe recipe={recipe} />);
  const linkElement = screen.getByText(/Test Recipe/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders App', async () => {
  axios.get.mockResolvedValueOnce({ data: [] });

  render(<App />);

  // Wait for any asynchronous actions to complete
  const linkElement = await screen.findByText(/K's Kuisine Azure Full-Stack Test/i);
  expect(linkElement).toBeInTheDocument();
});