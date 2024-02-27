import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const GroceryList = ({ groceryList }) => {
    const [list, setList] = useState(groceryList);
    const removeItem = (itemToRemove) => {
        setList(list.filter(item => item !== itemToRemove));
    };
    const clearList = () => {
        setList([]);
    };

    return (
        <div style={{ fontSize: '48px', textAlign: 'center' }}>
            <h1>Your Grocery List</h1> 
            <button onClick={clearList}>Clear List</button>
            {list.map((item) => (
                <div key={item}>   
                    {item}
                    <button onClick={() => removeItem(item)}>Remove</button>
                </div>
            ))}
        </div>
    );
};
export default GroceryList;
