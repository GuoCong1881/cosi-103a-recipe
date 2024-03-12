## Project Description
This project is a collaborative effort by Josh Rueter, Irene Guo, Emily Wohlgemuth, and Pranav Praburam. It serves as a documentation repository for the COSI 103A course at Brandeis University. This project is a React-based web application for displaying recipes.

The App.js file is importing various components and recipe data. The components include a Navbar and a Team component, which are used for navigation and displaying information about the team that created the app, respectively.

The recipe data is imported from individual files, each presumably representing a different recipe (e.g., Alfredo, GrilledCheese, Snickerdoodles, etc.).

The Header function component is used to display the header of the application, which includes the name of the app, "K's Kuisine".

The RecipeBoard function component is used to display the recipes.

The application uses react-router-dom for routing, which allows the application to navigate between different components (or pages) without a page refresh.

## Development Guide

# App.js

App.js is the main component of our application. It serves as the root component where we initialize and manage our application's main state and functions. It's responsible for rendering the main layout of our application and managing the main logic.

In App.js, we typically import and use other components to structure our application. These components can be anything from headers, footers, navigation menus, to more complex components like forms or tables.

We also manage our application's main state in App.js. This can include anything from user data, such as grocery list. We use React's useState and useEffect hooks for state management and side effects, respectively.

Functions that manipulate the state are also defined in App.js and passed down to child components via props. This allows child components to trigger state changes.

Remember, App.js is the entry point of our application. Any global settings or data should be initialized here. It's also where we handle routing if we're building a single-page application with multiple views.

# recipe.js

Recipe.js is a component that represents a single recipe in our application. It's responsible for displaying the details of a recipe, such as its name, ingredients, and cooking instructions.

In Recipe.js, we typically receive a recipe object as a prop from a parent component. This object contains all the information about the recipe. We use this object to populate the component's JSX, displaying the recipe's details to the user.

This component may also contain functions for user interactions, such as adding the recipe's ingredients to a grocery list. These functions are typically passed down from a parent component as props and are triggered by events in the Recipe.js component, such as button clicks.

Recipe.js is a crucial component in our application. Understanding how it works is key to understanding how users interact with recipes in our application. It's also a good example of how we use props to pass data and functions down from parent components.

# Grocery.js

Grocery.js is a component that represents the user's grocery list in our application. It's responsible for displaying the list of grocery items that the user has added, and providing functionality to manage this list.

In Grocery.js, we typically receive an array of grocery items as a prop from a parent component. This array is used to populate the component's JSX, displaying each grocery item to the user in a structured format, often as a list or a table.

This component also provides functionality to manage the grocery list. This includes functions to remove individual items from the list, and to clear the entire list. 


## Contact Information
If you have any questions or need further information, feel free to reach out to us via email:

- Josh Rueter: jrueter@brandeis.edu
- Irene Guo: ireneguo@brandeis.edu
- Emily Wohlgemuth: emilywohlgemuth@brandeis.edu
- Pranav Praburam: ppraburam@brandeis.edu


this is to test azure 1
