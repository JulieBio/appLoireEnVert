import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import backgroundEuro from "../assets/euro.png";
import { Container, Card, CardImg, CardBody, Button, CardText, CardSubtitle, Row, Col } from "reactstrap";
import retourFleche from "../assets/retourFleche.png";
import moment from "moment";
import HeadBack from "./headBack";
import "../App.css";

const styleBack = {
  goBack: {
    background: `url(${retourFleche})`,
    opacity: "0.5",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    position: "absolute",
    height: "25vmin",
    width: "10vmin",
    paddingTop: "8px",
    top: "-16vmin"
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
    axios.get(`/event/${this.id}`)
    .then(result => {
      console.log(result.data)
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
        free: result.data.free,
        lat: result.data.lat,
        lng: result.data.lng,
        urlSite: result.data.urlSite
      });
    });
  }

  // fonction Anaële qui rappelle la page précédement visitée
  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div>
        <Container className="container-eventDetails">
          <HeadBack />
          <Row>
            <Col>
              <div>
                <div style={styleBack.goBack} onClick={this.goBack} />
              </div>
              <Card className="card-details">
                <div>
                  <CardImg src={this.state.image} alt="image evenement" />
                  <CardBody>
                    <CardSubtitle className="nameEvent">
                      {this.state.name}
                    </CardSubtitle>
                    <div className="type-eventDetails">
                      <div className="freeEvent">
                        {this.state.free === "true" ? null : (
                          <div style={styleEuro.euro} />
                        )}
                        <div className={this.state.type} />
                      </div>
                    </div>
                    <p className="qui-eventDetails">{this.state.who}</p>
                    <p className="ou-eventDetails">{this.state.where}</p>
                    <CardSubtitle className="itemEvent">
                      <p>
                        {moment(this.state.start).format("ll")} -{" "}
                        {moment(this.state.finish).format("ll")}
                      </p>
                    </CardSubtitle>
                    <p className="place-eventDetails">{this.state.place}</p>
                    <div className="city-eventDetails">
                      {this.state.city === "null" ? (
                        <div />
                      ) : (
                          <p> {this.state.city}</p>
                        )}
                    </div>
                    <CardText className="description-event">
                      <div dangerouslySetInnerHTML={{__html: this.state.description}}/>
                    </CardText>

                    <div>
                      {/* {this.state.free === "true" ? (
                        <h1> </h1>
                      ) : ( */}
                      <Button
                        color="success"
                        className="inscription-button"
                        // href={this.state.urlSite}
                        href="https://loireenvert.fr/evenements/"
                      >
                        {" "}
                        + d'infos
                        </Button>
                    </div>
                  </CardBody>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default EventDetails;
