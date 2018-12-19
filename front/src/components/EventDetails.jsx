import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import backgroundEuro from "../assets/euro.png";
import {
  Container,
  Card,
  CardImg,
  CardBody,
  Button,
  CardText,
  CardSubtitle
} from "reactstrap";
import retourFleche from "../assets/retourFleche.png";
import moment from "moment";

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

const styleEuro = {
  euro: {
    background: `url(${backgroundEuro})`,
    backgroundSize: "contain",
    opacity: "0.5",
    backgroundRepeat: "no-repeat",
    height: "4.5vh",
    width: "5vh",
    float: "left",
    marginRight: "1vh"
    //padding: '5px',
  }
};

var idLocale = require("moment/locale/fr");
moment.locale("fr", idLocale);

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
        description: result.data.description,
        free: result.data.free
      });
    });
  }

  // fonction Anaële qui rappelle la page précédement visitée
  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    
    return (
      <Container className="container-eventDetails">
        <div
          style={{
            position: "fixed",
            backgroundColor: "rgb(240,240,240,0.5)",
            height: "6vh",
            width: "6vh",
            borderRadius: "25px",
            paddingTop: "4px",
            paddingLeft: "2px",
            margin: "5px",
            zIndex: "2"
          }}
        >
          <div style={styleBack.goBack} onClick={this.goBack} />
        </div>
        <Card>
          <div>
            <CardImg src={this.state.image} alt="image evenement" />
            <CardBody>
              <CardSubtitle className="nameEvent">
                {this.state.name}
              </CardSubtitle>
              <p className="type-eventDetails">
                <div className="freeEvent">
                  {this.state.free === "true" ? (
                    <h1> </h1>
                  ) : (
                    <div style={styleEuro.euro} />
                  )}
                  <div className={this.state.type} />
                </div>
              </p>
              <p className="qui-eventDetails">{this.state.who}</p>
              <p className="ou-eventDetails">{this.state.where}</p>
              <CardSubtitle className="itemEvent">
                <p>
                  {moment(this.state.start).format("ll")} -{" "}
                  {moment(this.state.finish).format("ll")}
                </p>
              </CardSubtitle>
              <p className="place-eventDetails">{this.state.place}</p>
              <p className="city-eventDetails">{this.state.city}</p>
              <CardText className="description-event">
                {this.state.description}
              </CardText>
              <Button
                color="success"
                className="inscription-button"
                href="https://loireenvert.fr/"
              >
                {" "}
                Je m'inscris
              </Button>{" "}
            </CardBody>
          </div>
        </Card>
      </Container>
    );
  }
}

export default EventDetails;
