import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { addEvent } from '../actions/index';
import { updateEventsList } from '../actions/index';
import Event from '../components/Event';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { NavLink } from "react-router-dom";
//import { Container, Row, Col } from 'reactstrap';

class EventList extends Component {
    componentWillMount() { }

    render() {
        console.log(this.props.activeEvents.events)
        return (

            <div className="EventList">
{/* Julie : récupération des évenements */}
                {
                    this.props.activeEvents.events.map(event => <Event event={event} />)
                }

            </div>
        );
    }
}

//Julie : transfert des états
const mapStateToProps = store => store;

const mapDispatchToProps = dispatch => ({
    addEvent: event => {
        dispatch(updateEventsList(event));
    }

});

export default connect(mapStateToProps, mapDispatchToProps)(EventList);