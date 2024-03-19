import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import UserRecipe from './userRecipe';

describe('UserRecipe', () => {
    test('should add recipe to the queue when "Add Recipe" button is clicked', () => {
        const { getByPlaceholderText, getByText, getByRole } = render(<UserRecipe />);
        const textarea = getByPlaceholderText('Enter raw JSON for recipe');
        const addButton = getByText('Add Recipe');
        const recipeQueue = getByRole('list');

        fireEvent.change(textarea, { target: { value: '{"name": "Pasta", "ingredients": ["pasta", "sauce"]}' } });
        fireEvent.click(addButton);

        expect(recipeQueue).toHaveTextContent('Pasta');
    });

    test('should display error message when invalid JSON is entered', () => {
        const { getByPlaceholderText, getByText } = render(<UserRecipe />);
        const textarea = getByPlaceholderText('Enter raw JSON for recipe');
        const addButton = getByText('Add Recipe');

        fireEvent.change(textarea, { target: { value: 'invalid json' } });
        fireEvent.click(addButton);

        expect(getByText('Invalid JSON format')).toBeInTheDocument();
    });
});

module.exports = {
    testEnvironment: 'jsdom',
};
