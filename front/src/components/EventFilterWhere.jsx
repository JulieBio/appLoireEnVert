import React, { Component } from "react";
import axios from "axios";
import { Button } from "reactstrap";
// import EventList from "../containers/EventList";


class EventFilterWhere extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventsFiltred: null
      //       // filterWho: null, à utiliser après
    };

    this.place = this.props.match.params.place;
    // this.who = this.props.match.params.who;
  }
  
  getFilter() {
    //Récupération de resultats filtrés via axios
    axios.get(`/event/${this.place}`).then(result => {
      // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
      this.setState({
        eventsFiltred: result.events,
      
      });
    });
    // this.props.functionCallDispatch();
  }

  routeChange = () => {
    console.log("was click");
    let path = "/who";
    this.props.history.push(path);
  };

  render() {
    return (
      <div className="buttoncenter">
        <Button onClick={this.routeChange} color="secondary" size="lg" block>
          {this.getFilter === "Forez"}
        </Button>
        <Button onClick={this.routeChange} color="secondary" size="lg" block>
          {this.getFilter === "Roannais"}
        </Button>
        <Button onClick={this.routeChange} color="secondary" size="lg" block>
          {this.getFilter === "Stéphanois Pilat"}
        </Button>
      </div>
    );
  }
}

export default EventFilterWhere;
