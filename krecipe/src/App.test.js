import { render, screen } from '@testing-library/react';
import App from './App';

// test to check if the recipe board header is rendered
test('renders recipe board', () => {
  const { container } = render(<App />);
  const recipeBoardElement = container.querySelector('.header-div');
  expect(recipeBoardElement).toBeTruthy();
});

// test to check if the recipe board is rendered
test('renders recipe board', () => {
  const { container } = render(<App />);
  const recipeBoardElement = container.querySelector('.recipe-board');
  expect(recipeBoardElement).toBeTruthy();
});

// test to check if the top recipes component of the board is rendered
test('renders recipe board', () => {
  const { container } = render(<App />);
  const recipeBoardElement = container.querySelector('.top-recipes');
  expect(recipeBoardElement).toBeTruthy();
});

// test to check if the recipe list component of the board is rendered
test('renders recipe board', () => {
  const { container } = render(<App />);
  const recipeBoardElement = container.querySelector('.recipe-list');
  expect(recipeBoardElement).toBeTruthy();
});


