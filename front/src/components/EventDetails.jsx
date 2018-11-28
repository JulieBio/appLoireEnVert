import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Event.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

class EventDetails extends Component {
  render() {
    const id = this.props.match.params.id;
    const type = this.props.match.params.type;

    return (
      <div>
        hello
        <h1>Id: {id}</h1>
        <h2>Type: {type}</h2>
      </div>
    );
  }
}

export default EventDetails;
