import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import UserRecipe from './userRecipe';

describe('UserRecipe', () => {
    test('should add recipe to the queue when "Add Recipe" button is clicked', () => {
        const { getByPlaceholderText, getByText, getByRole, getAllByRole } = render(<UserRecipe />);

        const textarea = getByPlaceholderText('Enter raw JSON for recipe');
        const addButton = getByText('Add Recipe');

        fireEvent.change(textarea, { target: { value: '{"name": "Pasta", "ingredients": ["pasta", "sauce"]}' } });
        fireEvent.click(addButton);

        const recipeQueue = getByRole('list');
        const recipeItems = getAllByRole('listitem');

        expect(recipeItems.length).toBe(1);
        expect(recipeItems[0]).toHaveTextContent('{"name": "Pasta", "ingredients": ["pasta", "sauce"]}');
    });

    test('should display error message when invalid JSON is entered', () => {
        const { getByPlaceholderText, getByText } = render(<UserRecipe />);

        const textarea = getByPlaceholderText('Enter raw JSON for recipe');
        const addButton = getByText('Add Recipe');

        fireEvent.change(textarea, { target: { value: 'invalid json' } });
        fireEvent.click(addButton);

        const errorMessage = getByText('Invalid JSON format');
        expect(errorMessage).toBeInTheDocument();
    });
});
