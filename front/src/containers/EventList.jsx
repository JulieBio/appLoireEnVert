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
import { updateFilter } from "../actions/index";

class EventList extends Component {
  componentWillMount() {

    console.log("here",this.props.filterEvents);
    this.props.functionCallDispatchFetchEvents(this.props.filterEvents);
  }

  render() {
    console.log("el", this.props);
    console.log(this.props.filterEvents); //console.log pour tester les events filtrés
    return (
      <div className="EventList">
        {/* Julie : récupération des évenements */}
        {this.props.activeEvents.events.map((event, index) => (
          <Event key={`event${index}`} event={event} />
        ))}
        {/* Appel des events filtrés, test Monica */}
       
      </div>
    );
  }
}

//Julie : transfert des états
const mapStateToProps = store => store;

const mapDispatchToProps = dispatch => ({
  functionCallDispatchFetchEvents: filter => dispatch(fetchEvents(filter)),
  addEvent: event => {
    dispatch(updateEventsList(event));
  },
  //Test events filtrés Monica
  addEventFilter: filter => {
    dispatch(updateFilter(filter));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventList);
