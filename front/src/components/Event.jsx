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

            {/*             <CardTitle className="type-event">{event.type}</CardTitle> */}

            <CardSubtitle className="itemEvent">
              {event.date}, {event.time}
            </CardSubtitle>

            {/*            <CardSubtitle className="heure-event">{event.time}</CardSubtitle>  */}

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

  /*const Event = ({ event }) => (
  <Container>
    <div className="cardAccueil">
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
              <CardSubtitle className="free">
                {event.free === "true" ? (
                  <h1/>
                ) : (
                  <div style={styleEuro.euro}/>
                )}
              </CardSubtitle>
            </Row>
          </CardBody>
        </Card>

    </div>
  </Container>*/
);
export default Event;
