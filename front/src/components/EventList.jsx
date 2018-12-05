/* import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "reactstrap";
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

const events = [
  {
    nom: "La biodiversité et les corridors biologiques",
    image:
      "http://insectes-de-france.fr/wp-content/uploads/Saint-Cloud-400x300.jpg",
    quand: "22/12/2018",
    type: "exposition",
    lieu: "Ecopôle du Forez",
    free: true,
    information:
      "La biodiversité, ou diversité biologique, constitue le tissu vivant de la planète. Elle recouvre l’ensemble des formes de vie sur Terre, les relations qui existent entre elles et avec leurs milieux depuis l’origine commune de la vie."
  },
  {
    nom: "Event2",
    image:
      "https://www.letelegramme.fr/images/2018/10/16/sortie-nature-le-jeune-phoque-fait-le-show_4219359_868x434p.jpg?v=1",
    quand: "22/12/2018",
    type: "exposition",
    lieu: "Ecopôle du Forez",
    free: true,
    information:
      "La biodiversité, ou diversité biologique, constitue le tissu vivant de la planète. Elle recouvre l’ensemble des formes de vie sur Terre, les relations qui existent entre elles et avec leurs milieux depuis l’origine commune de la vie."
  },
  {
    nom: "Event3",
    image:
      "https://www.valdeloire-france.com/sites/default/files/styles/sit_full/public/sit/data/media/images/fmapdl044v50i2in/decouverte-du-marais-de-goulaine-en-famille-2013.jpg",
    quand: "22/12/2018",
    type: "exposition",
    lieu: "Ecopôle du Forez",
    free: true,
    information:
      "La biodiversité, ou diversité biologique, constitue le tissu vivant de la planète. Elle recouvre l’ensemble des formes de vie sur Terre, les relations qui existent entre elles et avec leurs milieux depuis l’origine commune de la vie."
  }
];

class EventList extends Component {
  constructor() {
    super();
    this.state = {
      type: null,
      nom: null,
      quand: null,
      image: null
    };
  }

  render() {
    return (
      <div>
        {events.map(event => (
          <Container>
            <div key={event} className="cardAccueil">
              <NavLink to={`/event${event.id}`}>
                <Card body outline>
                  <CardImg
                    top
                    cardImage
                    src={event.image}
                    alt="Card image cap"
                    classname="images"
                  />
                  <CardBody classname="bodyCard">
                    <Row classname="description">
                      <CardTitle className="type">{event.type}</CardTitle>
                    </Row>
                    <Row>
                      <CardSubtitle className="nom">{event.nom}</CardSubtitle>
                    </Row>
                    <br />
                    <Row>
                      <CardText className="quand">{event.quand}</CardText>
                    </Row>
                  </CardBody>
                </Card>
              </NavLink>
            </div>
          </Container>
        ))
        /*           <div>
              <img src={event.image} />
              <p>{event.nom}</p>
            </div> 
        } 
      </div>
    );
  }
} 

export default EventList; */
