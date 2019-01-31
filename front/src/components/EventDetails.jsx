import React, { Component } from "react";
import { withRouter } from 'react-router';
import "bootstrap/dist/css/bootstrap.min.css";
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

var idLocale = require("moment/locale/fr");
moment.locale("fr", idLocale);

class EventDetails extends Component {


  // fonction qui rappelle la page précédement visitée
  goBack = () => {
    this.props.history.goBack();
  };


  //fonction qui enlève les balises html du post-content ainsi que les balises [caption]
  beautify(string) {
    if(!string) return '';
    return string.replace(/(<\w[^>]*>)/g, '<br />$1').replace(/\[\/?.*]/g, '');
  }

  render() {
    const event = this.props.location.state;
    return (
      <div>
        {event ?
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
                          <div className={event.category} />
                        </div>
                        <CardSubtitle className="itemEvent">
                          <p>
                            {moment(event.event_start_date).format("ll")} -{" "}
                            {moment(event.event_end_date).format("ll")}
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

                          <div className="freeEvent">
                            {event.event_rsvp === "0" ? (<div>Sur inscription ou payant</div>) : null}
                            <br />
                          </div>
                        </div>

                        <CardText className="description-event">
                          <div className='postContent' dangerouslySetInnerHTML={{ __html: this.beautify(event.post_content) }} />
                        </CardText>

                        <div>
                          <Button
                            color="success"
                            className="inscription-button"

                            // LIEN VERS LA PAGE DE L'EVENEMENT => quand le lien de l'évènement sur votre site internet sera récupérable dans l'Api; décommenter( supprimer les  "//" ) la ligne suivante: href={event.link} et supprimer la ligne: href="https://loireenvert.fr/evenements/"  

                            // href={event.link}
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
          ) : "Problème de chargement"
        }
      </div>
    );
  }
}

export default withRouter(EventDetails);
