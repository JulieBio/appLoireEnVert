import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";
import backgroundEuro from "../assets/euro.png";
import { Card, CardImg, CardBody, CardText, CardSubtitle } from "reactstrap";
import { NavLink } from "react-router-dom";

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

const Event = ({ event }) => (
  <Container>
    <div className="cardAccueil">
      <NavLink to={`/event/${event.id}`} className="lienAccueil">
        <Card>
          <CardImg
            top
            src={event.image}
            alt="Card image cap"
            className="CardeImage"
            width="100%"
          />
          <CardBody>
            <CardSubtitle className="nameEvent">{event.name}</CardSubtitle>
            <CardSubtitle className="itemEvent">
              {event.date}, {event.time}
            </CardSubtitle>
            <CardSubtitle className="itemEvent">{event.where}</CardSubtitle>
            <CardSubtitle>
              <div className="freeEvent">
                {event.free === "true" ? (
                  <h1> </h1>
                ) : (
                  <div style={styleEuro.euro} />
                )}
                <div className={event.type} />
              </div>
            </CardSubtitle>
          </CardBody>
        </Card>
      </NavLink>
    </div>
  </Container>
);
export default Event;
