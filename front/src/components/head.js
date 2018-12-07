import React from "react";
import "./head.css";
import { Navbar, NavbarBrand, NavItem } from "reactstrap";
import Logo from "../assets/loire-en-vert.png";
// import Media from "react-media";

// const Media = require("react-media");

class Head extends React.Component {
  render() {
    return (
      //Julie : bandeau head avec logo et nom
      <Navbar className="header">
        <NavbarBrand className="headerLogo" href="/">
          <img src={Logo} alt="Logo Loire en vert" />
        </NavbarBrand>
        <NavItem className="titleLoire">
          Toutes les activités nature <br />
          dans la Loire
        </NavItem>
      </Navbar>
    );
  }
}

export default Head;
