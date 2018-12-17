import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";

class Buttons extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      //eventsDateFilter: null //Anaële State pour filtrer par date
    };
  }
  

  // eventsDateFilter = date => {
  //   this.props.updateFilter()
  // };


  render() {
    return (
      <div className="blockButtons">
        <Button className="buttonDates" /*onClick{() => this.eventsDateFilter("")}*/>15 jours</Button> 
        <Button className="buttonDates" /*onClick{() => this.eventsDateFilter("")}*/>1 mois</Button>
        <Button className="buttonDates" /*onClick{() => this.eventsDateFilter("")}*/>3 mois</Button>
      </div>
    );
  }
}

export default Buttons;






