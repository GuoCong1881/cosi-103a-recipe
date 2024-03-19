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
                    <NavLink to="/About">
                        About
                    </NavLink>
                    <NavLink to="/Groceries">
                        Grocery List
                    </NavLink>
                    <NavLink to="/all-recipes">
                        All Recipes
                    </NavLink>
                </NavMenu>
            </Nav>
        </div>
    );
};
 
export default Navbar;