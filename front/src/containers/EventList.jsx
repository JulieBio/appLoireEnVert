import React, { Component } from "react";
import { Container, Row, Col, Card, Button } from "reactstrap";
import { connect } from "react-redux";
import { updateEventsList } from "../actions/index";
import { updateFilter } from "../actions/index";
import Event from "../components/Event";
import "bootstrap/dist/css/bootstrap.min.css";
import { fetchEvents } from "../actions/index";
import Buttons from "./Buttons";
import ButtonToTop from "../components/buttonToTop";
import "../App.css";
import HeaderNoBack from "../components/headNoBack";
import { Link } from "react-router-dom";

class EventList extends Component {
  componentWillMount() {
    console.log("here", this.props.filterEvents);
    //filterEvents dispatchée par Fetchevents(Monica/Nadim)
    this.props.functionCallDispatchFetchEvents(this.props.filterEvents);
  }

  //Lisa : on renvoie de nouveaux props quand on appuie sur les boutons de filtre jours
  componentWillReceiveProps(newprops) {
    console.log("newprops", newprops);
    if (this.props.filterEvents !== newprops.filterEvents)
      this.props.functionCallDispatchFetchEvents(newprops.filterEvents);
  }

  cancelFilter(filter) {
    this.props.updateFilter({ [filter]: "%%" });
    // if (filter === "%%") ? (<p/>) : (this.props.updateFilter({ [filter] : "%%"}));
  }

  render() {
    console.log(this.props.filterEvents); //console.log pour tester les events filtrés
    return (
      <div>
        <Container className="mainContainer">
          <div>
            <HeaderNoBack />
            <Buttons />

            {/* Julie : récupération des évenements */}

            {/* Nadim: une ternaire qui affiche les events si le tableau est rempli sinon un message s'il n'ya pas d'event*/}
            <Row className="phraseResultats">
              {this.props.filterEvents.who !== null &&
              this.props.filterEvents.who !== "%%" ? (
                <Button
                  className="close-button"
                  aria-label="Close alert"
                  type="button"
                  data-close
                  onClick={() => this.cancelFilter("who")}
                >
                  {this.props.filterEvents.who}{" "}
                  <span className="crossClose" aria-hidden="true">
                    &times;
                  </span>
                </Button>
              ) : (
                ""
              )}{" "}
              {this.props.filterEvents.where !== null &&
              this.props.filterEvents.where !== "%%" ? (
                <Button
                  className="close-button"
                  aria-label="Close alert"
                  type="button"
                  data-close
                  onClick={() => this.cancelFilter("where")}
                >
                  {this.props.filterEvents.where}{" "}
                  <span className="crossClose" aria-hidden="true">
                    &times;
                  </span>
                </Button>
              ) : (
                ""
              )}
            </Row>
            {this.props.activeEvents.events.length > 0 ? (
              <div>
                <Row>
                  {this.props.activeEvents.events.map((event, index) => (
                    <Col xs="12" sm="12" md="6">
                      <Event key={`event${index}`} event={event} />
                    </Col>
                  ))}
                </Row>
              </div>
            ) : (
              <Card className="cardnoEvent">
                <div className="titreNoevent">
                  <h2>Aucun événement ne correspond à votre recherche </h2>
                  <br />
                  <button type="button" className="buttonSearch">
                    <Link to="/"> Nouvelle recherche </Link>
                  </button>
                </div>
              </Card>
            )}

            <div className="espace"> </div>
            <ButtonToTop scrollStepInPx="50" delayInMs="16.66" />
          </div>
        </Container>
      </div>
    );
  }
}

//Julie : transfert des états
const mapStateToProps = ({ activeEvents, filterEvents }) => {
  console.log("store", { activeEvents, filterEvents });
  return { activeEvents, filterEvents };
};

const mapDispatchToProps = dispatch => {
  return {
    functionCallDispatchFetchEvents: filter => dispatch(fetchEvents(filter)),
    addEvent: event => {
      dispatch(updateEventsList(event));
    },
    updateFilter: filter => {
      dispatch(updateFilter(filter));
    }

    //*Test events filtrés Monica ne pas effacer merci**
    // addEventFilter: filter => {
    //   dispatch(updateFilter(filter));
    // }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventList);
