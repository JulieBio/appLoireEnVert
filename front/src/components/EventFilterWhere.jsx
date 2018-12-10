import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
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
    axios.get('/event/stephanois-pilat').then(result => {
      // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
      this.setState({
        eventsFiltreStephanois: result.events
      });
    });
    // this.props.functionCallDispatch();
  }

  routeChangeForez = () => {
    console.log("was click");
    let path = "event/forez";
    this.props.history.push(path);
  };
  routeChangeRoannais = () => {
    let path = "/Roannais";
    this.props.history.push(path);
  };
  routeChangeStephanois = () => {
    let path = "/event/stephanois-pilat";
    this.props.history.push(path);
  };

  render() {
    return (
      <div className="buttoncenter">
        <Button onClick={this.routeChangeForez} color="secondary" size="lg" block>
          {this.getFilter == "Forez"}
        </Button>
        <Button onClick={this.routeChangeRoannais} color="secondary" size="lg" block>
          {this.getFilter == "Roannais"}
        </Button>
        <Button onClick={this.routeChangeStephanois} color="secondary" size="lg" block>
          {this.getFilter == "Stéphanois Pilat"}
        </Button>
      </div>
    );
  }
}

export default withRouter (EventFilterWhere);
