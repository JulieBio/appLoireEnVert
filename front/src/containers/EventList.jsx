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
import moment from 'moment';

class EventList extends Component {
  // Julie : pour le filtre en front
  constructor() {
    super()
    this.state = {
      eventsfiltre: []
    }
  }

  componentWillMount() {
    console.log("here", this.props.filterEvents);
    this.filterEvent(this.props.activeEvents.events, this.props.filterEvents);

    //filterEvents dispatchée par Fetchevents(Monica/Nadim)
    // this.props.functionCallDispatchFetchEvents(this.props.filterEvents);
  }

  //Lisa : on renvoie de nouveaux props quand on appuie sur les boutons de filtre jours

  // Julie : filtres where et who pour l'API
  componentWillReceiveProps(newprops) {
    console.log("newprops API", newprops);
    this.filterEvent(newprops.activeEvents.events, newprops.filterEvents);
  }
  
  filterEvent = (events, filter) => {
    const evtFilt = events.filter((event) => {
      return (
        this.filterWhenCondition(filter.when,event.event_start_date, event.event_end_date) 
        && this.filterWhereCondition(filter.where, event.categories_id)
        && this.filterWhoCondition(filter.who, event.categories_id)
      )
    })
    console.log("filtered", evtFilt.length)
    this.setState({
      eventsfiltre: evtFilt
    })
  }

  filterWhenCondition(filterWhen, targetWhenStart, targetWhenEnd){
    return (-1 * moment().diff(targetWhenStart, "days") <= filterWhen
    && -1 * moment().diff(targetWhenEnd, "days") >= 0)
  }
  filterWhereCondition(filterWhere, targetWhere){
    if(!targetWhere) return false
    return (filterWhere === '%%'
          || (targetWhere && targetWhere.find(cat => 
            (cat && cat.name.toLowerCase().indexOf(filterWhere.toLowerCase()) >= 0)
          )))
  }
  filterWhoCondition(filterWho, targetWho){
    if(!targetWho) return false
    return (filterWho === '%%'
          || (targetWho && targetWho.find(cat => 
            (cat && cat.name.toLowerCase().indexOf(filterWho.toLowerCase()) >= 0)
          )))
  }


  cancelFilter(filter) {
    // this.props.updateFilter({ [filter]: "%%" });
    if (filter === "%%") {
      return (<p />)
    } else {
      (this.props.updateFilter({ [filter]: "%%" }));
    }
  };

  render() {
    console.log(this.props.filterEvents); //console.log pour tester les events filtrés
    const { eventsfiltre } = this.state;
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
            {eventsfiltre.length > 0 ? (
              <div>
                <Row>
                  {eventsfiltre.map((event, index) => (
                    <Col key={`event${index}`} xs="12" sm="12" md="6">
                      <Event event={event} />
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
// const mapStateToProps = ({ eventsLoire, filterEvents }) => {
// console.log("store", { eventsLoire, filterEvents });
// return { eventsLoire, filterEvents };
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
