describe('RecipeForm', () => {
    test('submits form and calls setRecipes', async () => {
      window.alert = jest.fn(); // Mock window.alert
      const setRecipes = jest.fn();
      let getByPlaceholderText, getByText;
  
      await act(async () => {
        ({ getByPlaceholderText, getByText } = render(<RecipeForm setRecipes={setRecipes} />));
      });
  
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
  
      axios.post.mockResolvedValueOnce({ data: expectedRecipe });
  
      await act(async () => {
        const recipeJson = JSON.stringify(recipe);
        fireEvent.change(getByPlaceholderText('Enter recipe in JSON format'), { target: { value: recipeJson } });
  
        userEvent.click(getByText('Add Recipe'));
      });
  
      await waitFor(() => expect(axios.post).toHaveBeenCalledWith('/api/recipes', expectedRecipe));
      expect(setRecipes).toHaveBeenCalled();
    });
  });