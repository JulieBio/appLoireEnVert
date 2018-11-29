import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Event.css';

class EventDetails extends Component {
  render() {
    return (
      <div>
        {this.props.type}
      </div>
    );
  }
}

export default EventDetails;
