import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
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
      <div>
        <Container className="eventList">
          <Buttons />
          {/* Julie : récupération des évenements */}
          <Row className="wrap">
            {this.props.activeEvents.events.map((event, index) => (
              <Col sm="12" md="6">
                <Event key={`event${index}`} event={event} />
              </Col>
            ))}
          </Row>

          <div className="espace"> </div>
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
