import React, { Component } from "react";
import { Button, Container, Row, Col } from "reactstrap";
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
        <Row>
          <Col xs="12" sm="12" md="12">
            <h1 className="titleOu">Où aller?</h1>
          </Col>
        </Row>

        <Row>
          <Col xs="12" sm="12" md="6">
            <Button
              className="buttonStephanois"
              onClick={() => this.eventsFiltred("Stéphanois-Pilat")} //Rappelle de la fonction eventsFiltred
              color="secondary"
              size="lg"
              block
            >
              <img src={stephanois} alt="mapStéphanois" />
              <p className="titleStéphanois">STEPHANOIS-PILAT</p>
            </Button>
          </Col>
          <Col xs="12" sm="12" md="6">
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
          </Col>
          <Col xs="12" sm="12" md="6">
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
          </Col>
        </Row>
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
