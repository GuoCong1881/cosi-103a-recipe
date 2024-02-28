import { render, screen, fireEvent } from '@testing-library/react';
import RecipePage from '/workspaces/cosi-103a/src/recipes/recipe.js'; 

describe('RecipePage', () => {
  const mockAddToGroceryList = jest.fn();
  const mockRecipe = {
    name: 'Test Recipe',
    description: 'Test Description',
    image: 'test-image.jpg',
    ingredients: ['Ingredient 1', 'Ingredient 2'],
    instructions: ['Instruction 1', 'Instruction 2'],
  };

  beforeEach(() => {
    render(<RecipePage recipe={mockRecipe} addToGroceryList={mockAddToGroceryList} />);
  });

  test('renders recipe image, name, and description', () => {
    expect(screen.getByAltText(mockRecipe.name)).toBeInTheDocument();
    expect(screen.getByText(mockRecipe.name)).toBeInTheDocument();
    expect(screen.getByText(mockRecipe.description)).toBeInTheDocument();
  });

  test('renders ingredients and instructions', () => {
    mockRecipe.ingredients.forEach(ingredient => {
      expect(screen.getByText(ingredient)).toBeInTheDocument();
    });

    mockRecipe.instructions.forEach(instruction => {
      expect(screen.getByText(instruction)).toBeInTheDocument();
    });
  });

  test('calls addToGroceryList when Add All Ingredients to Grocery List button is clicked', () => {
    fireEvent.click(screen.getByText('Add All Ingredients to Grocery List'));
    expect(mockAddToGroceryList).toHaveBeenCalled();
});
});