import React from "react";
import { Row } from "reactstrap";
import "./head.css";
import Logo from "../assets/loire-en-vert.png";

// import Media from "react-media";

// const Media = require("react-media");

class HeadBack extends React.Component {
  render() {
    return (
      <div className="header">
        <Row className="headerRow">
          <div className="headerLogoBack">
            <img src={Logo} alt="Logo Loire en vert" />
          </div>
          <div className="headerPhrase">
            Toutes les activités nature <br />
            dans la Loire
          </div>
        </Row>
      </div>
    );
  }
}

export default HeadBack;
