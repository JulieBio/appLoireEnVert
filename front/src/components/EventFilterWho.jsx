import React, { Component } from "react";
import { Button } from "reactstrap";
import {connect} from "react-redux";
import { updateFilter } from "../actions/index";


class EventFilterWho extends Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
      eventsFiltred: null
 
=======
      eventsFiltred: null // a vérifier par Monica/Nadim
>>>>>>> 280b2732f9d5ce38f041cdf0e7c47c86f475bec3
    };

    // this.id = this.props.match.params.id;

  }

  // componentWillMount() {

  // }

  eventsFiltred = who => {
    this.props.updateFilter({ who: who });
    this.props.history.push("/events");
  }
  cancelFilter= who  =>{
    this.props.updateFilter({ who: who });
    this.props.history.push("/events");

  }


  render() {
    return (
      <div className="buttoncenter">

        <Button onClick={() => this.cancelFilter("Famille" & "Public en situation de handicap")} color="secondary" size="lg" block>
        Tout Public
        </Button>

        <Button onClick={() => this.eventsFiltred("Famille")} color="secondary" size="lg" block>
          Famille
        </Button>
        <Button onClick={() => this.eventsFiltred("Enfants")} color="secondary" size="lg" block>
          Enfants
        </Button>
        <Button onClick={() => this.eventsFiltred("Public en situation de handicap")} color="secondary" size="lg" block>
          En situation d'handicap
        </Button>
        
      </div>
    );
  }
}

export default connect(null,
  dispatch => ({
    updateFilter: filter => {
      dispatch(updateFilter(filter));
    }
  }))(EventFilterWho);
