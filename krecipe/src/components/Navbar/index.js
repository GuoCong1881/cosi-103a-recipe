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
                        Hawaii
                    </NavLink>
                    <NavLink to="/Smoothie" activeStyle>
                        Smoothie
                    </NavLink>
                    <NavLink to="/Souffle" activeStyle>
                        Souffle
                    </NavLink>
                    {/* Second Nav */}
                    {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/Waffles">
                        Waffles
                    </NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};
 
export default Navbar;