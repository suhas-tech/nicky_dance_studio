import React, { useState } from "react";
import { BrowserRouter as Router, NavLink, useHistory } from "react-router-dom";

import {
    HeaderWrapper,
    Nav,
    Logo,
    NavLogin,
    NavButton,
    ContactUs,
} from "./style";

import NP_LOGO from "@images/npLogo.png";

const Header = (props) => {
    const history = useHistory();

    return (
        <HeaderWrapper>
            <Logo onClick={() => history.push("/")}>
                <img src={NP_LOGO} alt="Logo" />
            </Logo>

            <Nav >
                <ul>
                    <li>
                        <NavLink
                            exact
                            className="navLink"
                            activeClassName="selectedLink"
                            to="/"
                        >
                            Home
                        </NavLink>
                    </li>
                    {/* <li>
                        <NavLink
                            exact
                            className="navLink"
                            activeClassName="selectedLink"
                            to="/danceClass"
                        >
                            Dance Class
                        </NavLink>
                    </li> */}
                </ul>
            </Nav>

            <NavLogin>
                {/* <NavButton
                    onClick={() => history.push("/login")}
                    className="login"
                >
                    Sign in 
                </NavButton>
                <NavButton
                    onClick={() => history.push("/register")}
                    className="register"
                >
                    Register
                </NavButton> */}
                <ContactUs>Contact us</ContactUs>
            </NavLogin>
        </HeaderWrapper>
    );
};

export default Header;
