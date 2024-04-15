// server.test.js
const request = require('supertest');

// Import your server.js file
const app = require('C:\\Users\\15088\\OneDrive\\Desktop\\vsCode\\cosi-103a\\server\\server.js');

// Mock your recipes array
const recipes = [
  {
    name: 'Test Recipe',
    ingredients: 'Test Ingredients',
    instructions: 'Test Instructions'
  }
];

describe('Test the root path', () => {
  test('It should response the GET method', async () => {
    const response = await request(app).get('/api/recipes');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(recipes);
  });

  test('It should response the POST method', async () => {
    const newRecipe = {
      name: 'New Test Recipe',
      ingredients: 'New Test Ingredients',
      instructions: 'New Test Instructions'
    };
    const response = await request(app).post('/api/recipes').send(newRecipe);
    expect(response.statusCode).toBe(201);
    expect(response.body).toEqual(newRecipe);
  });

  test('It should return 400 for invalid recipe format', async () => {
    const invalidRecipe = {
      name: 'Invalid Test Recipe',
      ingredients: 'Invalid Test Ingredients'
      // Missing instructions
    };
    const response = await request(app).post('/api/recipes').send(invalidRecipe);
    expect(response.statusCode).toBe(400);
    expect(response.body).toEqual({ message: 'Invalid recipe format' });
  });
});