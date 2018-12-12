import React, { Component } from "react";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import { updateFilter } from "../actions/index";
import "./EventFilterWhere.css";
import forez from "../assets/forez.png";

class EventFilterWhere extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // eventsFiltred: null //state crée vider pour ensuite pusher sur lui les données. A tester car pas BDD.
    };

    this.id = this.props.match.params.id; // a tester sinon à effacer
  }

  componentWillMount() {}
  //Fonction qui prend "where" et qui va actualiser la liste filtrée
  // "where" et qui va pusher le result en tant que historique à la page "who"
  //On trouve updateFilter en tant que fichier action.
  eventsFiltred = where => {
    this.props.updateFilter({ where: where });
    this.props.history.push("/who");
  };

  render() {
    return (
      <div className= "container">
        <div>
          <Button
            className= "buttonForez"
            onClick={() => this.eventsFiltred("Forez")} //Rappelle de la fonction eventsFiltred
            color="secondary"
            size="lg"
            block
          >
           <p><img src={forez}/></p><p>Forez</p>
          </Button>
          <Button
            className=""
            onClick={() => this.eventsFiltred("Roannais")}
            color="secondary"
            size="lg"
            block
          >
            Roannais
          </Button>
          <Button
            className="button"
            onClick={() => this.eventsFiltred("Forez")}
            color="secondary"
            size="lg"
            block
          >
            Stéphanois-Pilat
          </Button>
        </div>
      </div>
    );
  }
}

//On connect EventFilterWhere
//On dispatch updateFilter
export default connect(
  null,
  dispatch => ({
    updateFilter: filter => {
      dispatch(updateFilter(filter));
    }
  })
)(EventFilterWhere);
