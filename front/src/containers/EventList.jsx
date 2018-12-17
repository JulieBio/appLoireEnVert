import React, { Component } from "react";
import { connect } from "react-redux";
import { updateEventsList } from "../actions/index";
import Event from "../components/Event";
import "bootstrap/dist/css/bootstrap.min.css";
import { fetchEvents } from "../actions/index";
import Buttons from "./Buttons";

class EventList extends Component {
  componentWillMount() {
    console.log("here", this.props.filterEvents);
    //filterEvents dispatchée par Fetchevents(Monica/Nadim)
    this.props.functionCallDispatchFetchEvents(this.props.filterEvents);
  }

  //Lisa : on renvoie de nouveaux props quand on appuie sur les boutons de filtre jours
  componentWillReceiveProps(newprops) {
    if (this.props.filterEvents !== newprops.filterEvents)
      this.props.functionCallDispatchFetchEvents(newprops.filterEvents);
  }

  render() {
    console.log(this.props.filterEvents); //console.log pour tester les events filtrés
    return (
      <div className="EventList">
        <Buttons />
        {/* Julie : récupération des évenements */}
        {this.props.activeEvents.events.map((event, index) => (
          <Event key={`event${index}`} event={event} />
        ))}
        <div className="espace"> </div>
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
