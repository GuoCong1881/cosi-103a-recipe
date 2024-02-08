import React from 'react';
import ReactDOM from 'react-dom';

const GroceryList = ({ groceryList }) => {
    return (
        <div style={{ fontSize: '48px', textAlign: 'center' }}>
            <h1>Your Grocery List</h1> {/* Added title */}
            {groceryList.map((item) => (
                <div key={item}>{item}</div>
            ))}
        </div>
    );
};
export default GroceryList;
