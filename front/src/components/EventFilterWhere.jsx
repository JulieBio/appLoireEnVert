import React, { Component } from "react";
import { Button, Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import { updateFilter } from "../actions/index";
import forez from "../assets/forez.png";
import roannais from "../assets/roannais.png";
import stephanois from "../assets/stephanois.png";
import HeadNoBack from "./headNoBack";
import toutLieux from "../assets/loiretoutlieux.png";
import "./EventFilterWhereWho.css";

//styles pour les buttons
const styles = {
  buttonFilter: { alignItems: "center", display: "flex" }
};

class EventFilterWhere extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventsFiltred: null, //state crée vider pour ensuite pusher sur lui les données.
      buttonList: [
        {
          name: "Toutes Zones",
          filter: "%%",
          image: toutLieux
        },
        {
          name: "Stéphanois-Pilat",
          filter: "Stéphanois-Pilat",
          image: stephanois
        },
        {
          name: "Forez",
          filter: "Forez",
          image: forez
        },
        {
          name: "Roannais",
          filter: "Roannais",
          image: roannais
        }
      ]
    };

    this.id = this.props.match.params.id;
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
      <div>
        <Container className="mainContainer">
          <HeadNoBack />
          <Row>
            <Col xs="12" sm="12" md="12" className="titleWhoWhere">
              Où aller ?
            </Col>
          </Row>

          <Row>
            {this.state.buttonList.map(button => (
              <Col xs="12" sm="12" md="12">
                <Button
                  className="buttonFilterWhoWhere"
                  onClick={() => this.eventsFiltred(button.filter)} //Rappelle de la fonction eventsFiltred
                  color="secondary"
                  size="lg"
                  block
                >
                  <Container>
                    <Row>
                      <Col xs="3">
                        <img src={button.image} alt="button filter" />
                      </Col>
                      <Col xs="9" style={styles.buttonFilter}>
                        <p className="titleFilter">
                          {button.name.toUpperCase()}
                        </p>
                      </Col>
                    </Row>
                  </Container>
                </Button>
              </Col>
            ))}
          </Row>
        </Container>
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
