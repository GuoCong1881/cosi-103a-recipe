import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar'; // replace './Navbar' with the path to the file where Navbar is defined

test('renders navbar with links', () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );

  // Check that the Home and About links are rendered
  expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();
});