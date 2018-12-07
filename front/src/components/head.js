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
      <div className="headerLisa">
        <div className="header">
          <div className="headerLogo" href="/">
            <img src={Logo} alt="Logo Loire en vert" />
          </div>
          <div className="titleLoire">
            Toutes les activités nature <br />
            dans la Loire
          </div>
        </div>
      </div>
    );
  }
}

export default Head;
