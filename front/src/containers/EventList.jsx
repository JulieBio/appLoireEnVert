import React, { Component } from "react";
import { connect } from "react-redux";
//import { addEvent } from '../actions/index';
import { updateEventsList } from "../actions/index";
import Event from "../components/Event";
import "bootstrap/dist/css/bootstrap.min.css";
//import { NavLink } from "react-router-dom";
//import { Container, Row, Col } from 'reactstrap';
import { fetchEvents } from "../actions/index";
import EventFilterWhere from "../components/EventFilterWhere";
import { fetchFilterWho } from "../actions/index";
import { updateFilterListWho } from "../actions/index";

class EventList extends Component {
componentWillMount() {

    console.log("elel");
this.props.functionCallDispatch();
}

render() {
  console.log("el",this.props);
  console.log(this.props.filterEvents); //console.log pour tester les events filtrés
return (
<div className="EventList">
{/* Julie : récupération des évenements */}
{this.props.activeEvents.events.map((event, index) => (
<Event key={`event${index}`} event={event} />
))}
{/* Appel des events filtrés, test Monica */}
{this.props.filterEvents.eventsFiltred.map((event, index) => (
  <EventFilterWhere key={`event${index}`} event={event} />
))}
</div>
);
}
}

//Julie : transfert des états
const mapStateToProps = store => store;

const mapDispatchToProps = dispatch => ({
  functionCallDispatch: () => dispatch(fetchEvents(), fetchFilterWho()),
    addEvent: event => {
    dispatch(updateEventsList(event));
  },
  //Test events filtrés Monica
    addEventFilter: event => {
    dispatch(updateFilterListWho(event));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventList);
