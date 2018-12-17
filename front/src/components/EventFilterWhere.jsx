import React, { Component } from "react";
import { Button, Container } from "reactstrap";
import { connect } from "react-redux";
import { updateFilter } from "../actions/index";
import "./EventFilterWhere.css";
import forez from "../assets/forez.png";
import roannais from "../assets/roannais.png";
import stephanois from "../assets/stephanois.png";

class EventFilterWhere extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventsFiltred: null //state crée vider pour ensuite pusher sur lui les données.
    };

  }


  //Fonction qui prend "where" et qui va actualiser la liste filtrée
  // "where" et qui va pusher le result en tant que historique à la page "who"
  //On trouve updateFilter en tant que fichier action.
  eventsFiltred = where => {
    this.props.updateFilter({ where: where });
    this.props.history.push("/who");
  };

  render() {
    return (
        <Container className="containerOu">
          <h1 className="titleOu">Où aller?</h1>

          <Button
            className="buttonStephanois"
            onClick={() => this.eventsFiltred("Stéphanois-Pilat")} //Rappelle de la fonction eventsFiltred
            color="secondary"
            size="lg"
            block
          >
            <p>
              <img src={stephanois} alt="mapStéphanois" />
            </p>
            <p className="titleStéphanois">STEPHANOIS-PILAT</p>
          </Button>
          <Button
            className="buttonForez"
            onClick={() => this.eventsFiltred("Forez")}
            color="secondary"
            size="lg"
            block
          >
            <p>
              <img src={forez} alt="mapForez" />
            </p>
            <p className="titleForez">FOREZ</p>
          </Button>
          <Button
            className="buttonRoannais"
            onClick={() => this.eventsFiltred("Roannais")}
            color="secondary"
            size="lg"
            block
          >
            <p>
              <img src={roannais} alt="mapRoannais" />
            </p>
            <p className="titleRoannais">ROANNAIS</p>
          </Button>
        </Container>
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
