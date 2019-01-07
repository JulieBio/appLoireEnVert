import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./head.css";
import Logo from "../assets/loire-en-vert.png";
// import Media from "react-media";

// const Media = require("react-media");

class HeadNoBack extends React.Component {
  render() {
    return (
      <div className="header">
        <Container>
          <Row className="headerRow">
            <Col xs="3" sm="3" md="3">
              <img src={Logo} alt="Logo Loire en vert" className="headerLogo" />
            </Col>
            <Col xs="1" sm="1" md="1" />
            <Col xs="7" sm="7" md="7" className="headerPhrase">
              Toutes les activités nature <br />
              dans la Loire
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default HeadNoBack;
