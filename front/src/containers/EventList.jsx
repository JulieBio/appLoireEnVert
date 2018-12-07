import React, { Component } from "react";
import { connect } from "react-redux";
import { updateEventsList } from "../actions/index";
import Event from "../components/Event";
import "bootstrap/dist/css/bootstrap.min.css";
import { fetchEvents } from "../actions/index";
import Buttons from "../components/Buttons";

class EventList extends Component {
  componentWillMount() {
    this.props.functionCallDispatch();
  }

  render() {
    console.log(this.props.activeEvents.events);
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
const mapStateToProps = store => store;

const mapDispatchToProps = dispatch => ({
  functionCallDispatch: () => dispatch(fetchEvents()),
  addEvent: event => {
    dispatch(updateEventsList(event));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventList);
