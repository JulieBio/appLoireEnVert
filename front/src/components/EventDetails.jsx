import React, { Component } from "react";
import { withRouter } from 'react-router';
import "bootstrap/dist/css/bootstrap.min.css";
// import axios from "axios";
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
      // location_latitudes: null,
      // location_longitude: null,
    };
    // this.id = this.props.match.params.id;
  }

  // componentWillMount() {
  //   axios.get(`https://loireenvert.fr/wp-json/wp/v2/events/${this.id}`).then(json => {
  //     console.log("axios", json.data[0]);
  //     this.setState({
  //       // image: result.data.image,
  //       //  name: response.data.event_name,
  //       // type: result.data.type,
  //       // who: result.data.who,
  //       // where: result.data.event_where,
  //       // start: result.data.event_date_start,
  //       // finish: result.data.event_date_finish,
  //       // place: result.data.place,
  //       // city: result.data.city,
  //       // description: result.data.description,
  //       // free: result.data.free,
  //       // location_latitude: rs
  //     });
  //   });
  //   console.log(this.props)
  // }

  // fonction Anaële qui rappelle la page précédement visitée
  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    const event = this.props.location.state;
    return (
      <div>
        {
          event ?
            (
              <Container className="container-eventDetails">
                <HeadBack />
                <Row>
                  <Col>
                    <div>
                      <div style={styleBack.goBack} onClick={this.goBack} />
                    </div>
                    <Card className="card-details">
                      <div>
                        <CardImg src={event.image} alt="image evenement" />
                        <CardBody>
                          <CardSubtitle className="nameEvent">
                            {event.event_name}
                          </CardSubtitle>
                          <div className="type-eventDetails">
                            <div className="freeEvent">
                              {event.event_rsvp === "0" ? null : (
                                <div style={styleEuro.euro} />
                              )}
                              <div className={event.category} />
                            </div>
                          </div>
                          {/* <p className="qui-eventDetails">{this.state.who}</p>
                          <p className="ou-eventDetails">{this.state.where}</p> */}
                          <CardSubtitle className="itemEvent">
                            <p>
                              {moment(this.state.start).format("ll")} -{" "}
                              {moment(this.state.finish).format("ll")}
                              <br />
                              {event.event_start_time}{" "}{event.event_end_time}{" "}
                            </p>
                          </CardSubtitle>
                          <p className="place-eventDetails">{event.location_name}</p>
                          <div className="city-eventDetails">
                            {event.location_name === "null" ? (
                              <div />
                            ) : (
                                <p> {event.location_town}</p>
                              )}
                          </div>
                          <CardText className="description-event">
                            <div dangerouslySetInnerHTML={{ __html: event.post_content }} />
                          </CardText>

                          <div>
                            <Button
                              color="success"
                              className="inscription-button"
                              href={event.link}
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
            )
            : "Problème de chargement"
        }
      </div >
    );
  }
}

export default withRouter(EventDetails);
