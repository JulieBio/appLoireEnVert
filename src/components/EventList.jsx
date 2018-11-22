import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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
  render() {
    return (
      <div>
        {events.map(event => (
          <div>
            <Card body outline color="primary">
              <CardImg top width="80%" src={event.image} alt="Card image cap" />
              <CardBody>
                <CardTitle>{event.type}</CardTitle>
                <CardSubtitle>{event.nom}</CardSubtitle>
                <CardText>{event.quand}</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </div>

          /*           <div>
            <img src={event.image} />
            <p>{event.nom}</p>
          </div> */
        ))}
      </div>
    );
  }
}

export default EventList;
