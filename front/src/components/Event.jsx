import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardImg, CardBody, CardSubtitle } from "reactstrap";
import { NavLink } from "react-router-dom";
import moment from "moment";
import LinesEllipsis from "react-lines-ellipsis";
import "./eventList.css";

// affichage des dates en fr avec momentjs
const idLocale = require("moment/locale/fr");
moment.locale("fr", idLocale);

const Event = ({ event }) => (
  <div className="cardAccueil">
    <NavLink to={{ pathname: `/event/${event.event_id}`, state: event }}>
      <Card style={{ "height": 400 }}>
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
          <br />
          <CardSubtitle className="itemEvent">
            <p>
              {moment(event.event_start_date).format("ll")} -{" "}
              {moment(event.event_end_date).format("ll")}
              <br />
              {event.event_start_time}{" "}{event.event_end_time}{" "}
            </p>
          </CardSubtitle>
          <CardSubtitle className="itemEvent">{event.location_town}</CardSubtitle>
          <br />
          <CardSubtitle>
            <div className="cardIcones">
              {event.event_rsvp === "0" ? (<div>Sur inscription ou payant</div>) : null}
            </div>
          </CardSubtitle>
        </CardBody>
      </Card>
    </NavLink>
  </div>
);

export default Event;
