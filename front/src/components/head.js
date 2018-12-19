import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./head.css";
import Logo from "../assets/loire-en-vert.png";
// import Media from "react-media";

// const Media = require("react-media");

class Head extends React.Component {
  render() {
    return (
      <div className="header">
        <Container>
          <Row>
            <Col xs="3" sm="3" md="3">
              <img src={Logo} alt="Logo Loire en vert" className="headerLogo" />
            </Col>
            <Col xs="9" sm="9" md="9">
              <p>
                Toutes les activités nature <br />
                dans la Loire
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Head;
