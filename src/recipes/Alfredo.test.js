import React from 'react';
import { render } from '@testing-library/react';
import Alfredo from './Alfredo';

describe('Alfredo Component', () => {
    it('renders without crashing', () => {
        render(<Alfredo />);
    });

    it('displays the correct title', () => {
        const { getByText } = render(<Alfredo />);
        const titleElement = getByText('Chicken Alfredo');
        expect(titleElement).toBeInTheDocument();
    });

    it('displays the ingredients', () => {
        const { getByText } = render(<Alfredo />);
        const ingredientsElement = getByText('Ingredients');
        expect(ingredientsElement).toBeInTheDocument();
        // Add additional assertions to check the specific ingredients displayed
    });

    it('displays the instructions', () => {
        const { getByText } = render(<Alfredo />);
        const instructionsElement = getByText('Instructions');
        expect(instructionsElement).toBeInTheDocument();
        // Add additional assertions to check the specific instructions displayed
    });

    // Add more test cases as needed
});
