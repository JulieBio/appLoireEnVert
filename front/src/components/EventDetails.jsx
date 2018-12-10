import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Container, CardImg } from "reactstrap";

class EventDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      type: null
    };
    this.id = this.props.match.params.id;
  }

  componentWillMount() {
    axios.get(`/event/${this.id}`).then(result => {
      this.setState({
        image: result.data.image,
        name: result.data.name,
        type: result.data.type,
        who: result.data.who,
        where: result.data.where,
        place: result.data.place,
        city: result.data.city,
        description: result.data.description
      });
    });
  }

  render() {
    return (
      <Container>
        <div>
          <CardImg src={this.state.image} alt="image evenement" />
          <p className="nom-event">{this.state.name}</p>
          <p className="type-event">{this.state.type}</p>
          <p className="qui-eventDetails">{this.state.who}</p>
          <p className="ou-eventDetails">{this.state.where}</p>
          <p className="place-eventDetails">{this.state.place}</p>
          <p className="city-eventDetails">{this.state.city}</p>
          <p className="description-event">{this.state.description}</p>
        </div>
      </Container>
    );
  }
}

export default EventDetails;
