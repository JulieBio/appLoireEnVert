import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Event.css";
import axios from "axios";

class EventDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      type: null
    };
    console.log(this.state.name);
    console.log(this.state.type);
    this.id = this.props.match.params.id;
  }

  componentWillMount() {
    axios.get(`/event/${this.id}`).then(result => {
      this.setState({
        name: result.data.name,
        type: result.data.type
      });
      console.log(result.data.name);
      console.log(result.data.name);
    });
  }

  render() {
    return (
      <div>
        hello
        <p>{this.id}</p>
        <p>{this.state.name}</p>
        <p>{this.state.type}</p>
      </div>
    );
  }
}

export default EventDetails;
