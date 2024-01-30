import { render, screen } from '@testing-library/react';
import App from './App';

test('renders recipe board', () => {
  const { container } = render(<App />);
  const recipeBoardElement = container.querySelector('.header-div');
  expect(recipeBoardElement).toBeTruthy();
});

test('renders recipe board', () => {
  const { container } = render(<App />);
  const recipeBoardElement = container.querySelector('.recipe-board');
  expect(recipeBoardElement).toBeTruthy();
});

test('renders recipe board', () => {
  const { container } = render(<App />);
  const recipeBoardElement = container.querySelector('.top-recipes');
  expect(recipeBoardElement).toBeTruthy();
});

test('renders recipe board', () => {
  const { container } = render(<App />);
  const recipeBoardElement = container.querySelector('.recipe-list');
  expect(recipeBoardElement).toBeTruthy();
});


