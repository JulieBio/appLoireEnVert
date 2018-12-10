import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";

export default class Buttons extends React.Component {
  render() {
    return (
      <div className="blockButtons">
        <Button className="buttonDates">15 jours</Button>
        <Button className="buttonDates">1 mois</Button>
        <Button className="buttonDates">3 mois</Button>
      </div>
    );
  }
}
