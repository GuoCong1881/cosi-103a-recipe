import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";

 
const Navbar = () => {
    return (
        <div className="navbar">
            <Nav>
                <Bars />
 
                <NavMenu>
                    <NavLink to="/" >
                        Home
                    </NavLink>
                    <NavLink to="/add-recipes">
                        Add Recipes
                    </NavLink>
                    <NavLink to="/Groceries">
                        Grocery List
                    </NavLink>

                    <NavLink to="/About">
                        About
                    </NavLink>
                </NavMenu>
            </Nav>
        </div>
    );
};
 
export default Navbar;