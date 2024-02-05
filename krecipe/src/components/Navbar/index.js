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
        <>
            <Nav>
                <Bars />
 
                <NavMenu>
                    <NavLink to="/Home" >
                        Home
                    </NavLink>
                    <NavLink to="/Alfredo" activeStyle>
                        Alfredo
                    </NavLink>
                    <NavLink to="/GrilledCheese" activeStyle>
                        Grilled Cheese
                    </NavLink>
                    <NavLink to="/Hawaii" activeStyle>
                        Hawaiian Haystacks
                    </NavLink>
                    <NavLink to="/Smoothie" activeStyle>
                        Smoothie
                    </NavLink>
                    <NavLink to="/Souffle" activeStyle>
                        Souffle
                    </NavLink>
                    <NavLink to="/Snickerdoodles" activeStyle>
                        Snickerdoodles
                    </NavLink>
                    <NavLink to="/Waffles" activeStyle>
                        Waffles
                    </NavLink>
                    <NavLink to="/Waffles" activeStyle>
                        About
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;