import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "reactstrap";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import "./Event.css";
import { NavLink } from "react-router-dom";

const Event = ({ event }) => (
  <Container>
    <div className="cardAccueil">
      <NavLink to={`/event/${event.id}`}>
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
              <CardSubtitle className="nom">{event.name}</CardSubtitle>
            </Row>
            <br />
            <Row>
              <CardSubtitle className="quand">{event.date}</CardSubtitle>
            </Row>
            <br />
            <Row>
              <CardSubtitle className="heure">{event.time}</CardSubtitle>
            </Row>
            <br />
            <Row>
              <CardSubtitle className="free">{event.free}</CardSubtitle>
            </Row>
          </CardBody>
        </Card>
      </NavLink>
    </div>
  </Container>
);
export default Event;
