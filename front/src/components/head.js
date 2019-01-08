import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./head.css";
import Logo from "../assets/loire-en-vert.png";
import HeadBack from "./headBack";
import HeadNoBack from "./headNoBack";
// import Media from "react-media";

// const Media = require("react-media");

class Head extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urlAdress: null
    };
  }

  componentDidMount() {
    this.setState({ urlAdress: window.location.href });
    console.log(window.location.href);
    console.log("state " + this.state.urlAdress);
  }

  render() {
    return (
      <div className="header">
        {window.location.href === "http://localhost:3000/who" ? (
          <HeadBack />
        ) : (
          <HeadNoBack />
        )}
      </div>
    );
  }
}

export default Head;
