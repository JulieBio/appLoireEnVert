import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import backgroundEuro from "../assets/euro.png";
import { Card, CardImg, CardBody, CardSubtitle } from "reactstrap";
import { NavLink } from "react-router-dom";
import moment from "moment";
import LinesEllipsis from "react-lines-ellipsis";
import "./eventList.css";

const styleEuro = {
  euro: {
    background: `url(${backgroundEuro})`,
    backgroundSize: "contain",
    opacity: "0.5",
    backgroundRepeat: "no-repeat",
    height: "25px",
    width: "20px",
    float: "left",
    marginRight: "1vh"
    //padding: '5px',
  }
};
// Lisa : affichage des dates en fr avec momentjs
const idLocale = require("moment/locale/fr");
moment.locale("fr", idLocale);


const Event = ({ event }) => (
  <div className="cardAccueil">
    <NavLink to={`/event/${event.id}`}>
      <Card>
        <CardImg
          top
          src={event.image}
          alt="Card image cap"
          className="cardImage"
        />
        <CardBody className="cardContent">
          <LinesEllipsis
            className="eventTitle"
            text={event.name}
            maxLine="2"
            basedOn="letters"
          />
          <CardSubtitle className="itemEvent">
            <p className="typeEvent">{event.type} </p>
          </CardSubtitle>
          <CardSubtitle className="itemEvent">
            <p>
              {moment(event.event_date_start).format("ll")} -{" "}
              {moment(event.event_date_finish).format("ll")}
              <br />
              {event.event_time}{" "}
            </p>
          </CardSubtitle>
          <CardSubtitle className="itemEvent">{event.event_where}</CardSubtitle>
          <CardSubtitle>
            <div className="cardIcones">
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
);

export default Event;
