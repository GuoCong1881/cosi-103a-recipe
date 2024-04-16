import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import RecipePage from './recipe';

describe('RecipePage', () => {
  const recipe = {
    name: 'Test Recipe',
    description: 'This is a test recipe',
    image: 'test-image.jpg',
    ingredients: ['Ingredient 1', 'Ingredient 2'],
    instructions: ['Step 1', 'Step 2', 'Step 3'],
  };

  const addToGroceryList = jest.fn();

  test('renders recipe details', () => {
    const { getByText, getByAltText } = render(
      <RecipePage recipe={recipe} addToGroceryList={addToGroceryList} />
    );

    expect(getByAltText('Test Recipe')).toBeInTheDocument();
    expect(getByText('Test Recipe')).toBeInTheDocument();
    expect(getByText('This is a test recipe')).toBeInTheDocument();
  });

  test('calls addToGroceryList when "Add All Ingredients to Grocery List" button is clicked', () => {
    const { getByText } = render(
      <RecipePage recipe={recipe} addToGroceryList={addToGroceryList} />
    );

    fireEvent.click(getByText('Add All Ingredients to Grocery List'));

    expect(addToGroceryList).toHaveBeenCalledTimes(2);
    expect(addToGroceryList).toHaveBeenCalledWith('Ingredient 1');
    expect(addToGroceryList).toHaveBeenCalledWith('Ingredient 2');
  });

  test('toggles showBox state when "Enter Cooking Mode" button is clicked', () => {
    const { getByText } = render(
      <RecipePage recipe={recipe} addToGroceryList={addToGroceryList} />
    );

    fireEvent.click(getByText('Enter Cooking Mode'));

    expect(getByText('Exit Cooking Mode')).toBeInTheDocument();
  });

  // Add more tests for other functionality
});
