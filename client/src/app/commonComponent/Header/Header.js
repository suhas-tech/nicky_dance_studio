import React, { useState } from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import {
  HeaderWrapper,
  Nav,
  Logo,
  Hamburger,
  ShowMobile,
  ShowDesktop
} from "./style";
import MenuIcon from "@material-ui/icons/Menu";
import { ImageUrl, VideoUrl } from "../../utils/url";

const Header = props => {
  const [showMobile, setShowMobile] = useState(false);
  const onHamburgerClick = () => {
    setShowMobile(!showMobile);
  };

  return (
    <HeaderWrapper>
      <Logo>
        <img src="npLogo.png" alt="Logo" />
      </Logo>
      <Hamburger>
        <div onClick={onHamburgerClick}>
          <MenuIcon />
        </div>
      </Hamburger>
      <ShowDesktop>
        <Nav>
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
            <li>
              <NavLink
                exact
                className="navLink"
                activeClassName="selectedLink"
                to="/danceClass"
              >
                Dance Class
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                className="navLink"
                activeClassName="selectedLink"
                to="/eventsWorkshops"
              >
                Events / Workshops
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                className="navLink"
                activeClassName="selectedLink"
                to="/collaborations"
              >
                Collaborations
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                className="navLink"
                activeClassName="selectedLink"
                to="/fans"
              >
                Fans
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                className="navLink"
                activeClassName="selectedLink"
                to="/socialMedia"
              >
                Social Media
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                className="navLink"
                activeClassName="selectedLink"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                className="navLink"
                activeClassName="selectedLink"
                to="/contactUs"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </Nav>
      </ShowDesktop>
      {showMobile && (
        <ShowMobile>
           
      
    

          <Nav id="navBar">
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
              <li>
                <NavLink
                  exact
                  className="navLink"
                  activeClassName="selectedLink"
                  to="/danceClass"
                >
                  Dance Class
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  className="navLink"
                  activeClassName="selectedLink"
                  to="/eventsWorkshops"
                >
                  Events / Workshops
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  className="navLink"
                  activeClassName="selectedLink"
                  to="/collaborations"
                >
                  Collaborations
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  className="navLink"
                  activeClassName="selectedLink"
                  to="/fans"
                >
                  Fans
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  className="navLink"
                  activeClassName="selectedLink"
                  to="/socialMedia"
                >
                  Social Media
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  className="navLink"
                  activeClassName="selectedLink"
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  className="navLink"
                  activeClassName="selectedLink"
                  to="/contactUs"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </Nav>
     
        </ShowMobile>
      )}
    </HeaderWrapper>
  );
};

export default Header;
