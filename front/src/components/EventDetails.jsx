import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Container, CardImg } from "reactstrap";
import retourFleche from "../assets/retourFleche.png";

const styleBack = {
  goBack: {
    background: `url(${retourFleche})`,
    opacity: "0.5",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    height: "4.5vh",
    width: "4.5vh"
  }
};

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
      console.log(result.data);
      this.setState({
        image: result.data.image,
        name: result.data.name,
        type: result.data.type,
        who: result.data.who,
        where: result.data.event_where,
        start: result.data.event_date_start,
        finish: result.data.event_date_finish,
        place: result.data.place,
        city: result.data.city,
        description: result.data.description
      });
    });
  }

  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <Container>
        <div
          style={{
            position: "fixed",
            backgroundColor: "rgb(240,240,240,0.5)",
            height: "6vh",
            width: "6vh",
            borderRadius: "25px",
            paddingTop: "4px",
            paddingLeft: "2px",
            margin: "5px"
          }}
        >
          <div style={styleBack.goBack} onClick={this.goBack} />
        </div>

        <div>
          <CardImg src={this.state.image} alt="image evenement" />
          <p className="nom-event">{this.state.name}</p>
          <p className="type-event">{this.state.type}</p>
          <p className="qui-eventDetails">{this.state.who}</p>
          <p className="when">du {this.state.start} au {this.state.finish}</p>
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
