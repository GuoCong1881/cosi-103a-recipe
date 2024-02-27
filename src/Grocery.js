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
        <div className="container">
            <h1>Your Grocery List</h1> 
            <button onClick={clearList}>Clear List</button>
            {list.map((item) => (
                <tr className="item" key={item}>   
                    <td>{item}</td>
                    <td>
                        <button onClick={() => removeItem(item)}>Remove</button>
                    </td>
                </tr>
            ))}
        </div>
    );
};
export default GroceryList;
