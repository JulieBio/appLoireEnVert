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
    height: "20px",
    width: "20px",
    float: "right",
    marginLeft: "1vh"
    //padding: '5px',
  }
};
// Lisa : affichage des dates en fr avec momentjs
const idLocale = require("moment/locale/fr");
moment.locale("fr", idLocale);

const Event = ({ event }) => (
  <div className="cardAccueil">
    <NavLink to={{pathname:`/event/${event.event_id}`, state:event}}>
      <Card>
        <CardImg
          src={event.image}
          alt="Card image cap" 
          className="cardImage"
        />
        <CardBody className="cardContent">
          <LinesEllipsis
            className="eventTitle"
            text={event.event_name}
            maxLine="2"
            basedOn="letters"
          />
          {/* <CardSubtitle className="itemEvent">
            <p className="eventTitle">{event.event_name} </p>
          </CardSubtitle> */}
          <CardSubtitle className="itemEvent">
            <p className="typeEvent">{event.type} </p>
          </CardSubtitle>
          <CardSubtitle className="itemEvent">
            <p>
              {moment(event.event_start_date).format("ll")} -{" "}
              {moment(event.event_end_date).format("ll")}
              <br />
              {event.event_start_time}{" "}{event.event_end_time}{" "}
            </p>
          </CardSubtitle>
          <CardSubtitle className="itemEvent">{event.location_town}</CardSubtitle>
          <CardSubtitle>
            <div className="cardIcones">
            {event.event_rsvp === "0" ? (<div>Sur incription ou payant</div>) : null}
                              <br /> 
              <div className={event.type} />
            </div>
          </CardSubtitle>
        </CardBody>
      </Card>
    </NavLink>
  </div>
);

export default Event;
