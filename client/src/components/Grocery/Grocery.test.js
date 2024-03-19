import React from 'react';
import { render, fireEvent} from '@testing-library/react';
import GroceryList from './Grocery';

describe('GroceryList', () => {
    it('renders without crashing', () => {
        render(<GroceryList groceryList={[]} />);
    });

    it('renders the correct number of grocery items', () => {
        const groceryList = ['Apples', 'Bananas', 'Oranges'];
        const { getAllByTestId } = render(<GroceryList groceryList={groceryList} />);
        const groceryItems = getAllByTestId('grocery-item');
        expect(groceryItems.length).toBe(groceryList.length);
    });

    it('renders each grocery item correctly', () => {
        const groceryList = ['Apples', 'Bananas', 'Oranges'];
        const { getAllByTestId } = render(<GroceryList groceryList={groceryList} />);
        const groceryItems = getAllByTestId('grocery-item');
        groceryItems.forEach((item, index) => {
            const itemName = item.querySelector('td').textContent;
            expect(itemName).toBe(groceryList[index]);
        });
    });
});

