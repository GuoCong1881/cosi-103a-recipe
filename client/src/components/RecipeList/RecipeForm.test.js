import React from 'react';
import { render, fireEvent, waitFor, act } from '@testing-library/react';
import axios from 'axios';
import RecipeForm from './RecipeForm';

jest.mock('axios');

describe('RecipeForm', () => {
  it('submits form and calls setRecipes', async () => {
    const setRecipes = jest.fn();
    const { getByPlaceholderText, getByText } = render(<RecipeForm setRecipes={setRecipes} />);

    const recipe = {
      name: 'Test Recipe',
      ingredients: ['ingredient1', 'ingredient2'],
      steps: ['step1', 'step2'],
    };

    const expectedRecipe = {
      ...recipe,
      image: 'https://montevista.greatheartsamerica.org/wp-content/uploads/sites/2/2016/11/default-placeholder-375x375.png',
      link: recipe.name.toLowerCase().replace(/\s+/g, '-'),
    };

    axios.post.mockResolvedValueOnce();

    fireEvent.change(getByPlaceholderText('Enter recipe in JSON format'), { target: { value: JSON.stringify(recipe) } });

    window.alert = jest.fn(); // Mock window.alert

    await act(async () => {
      fireEvent.click(getByText('Add Recipe'));
    });

    await waitFor(() => expect(axios.post).toHaveBeenCalledWith('/api/recipes', expectedRecipe));
    expect(setRecipes).toHaveBeenCalled();
  });
});