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
        return (

            <div className="EventList">
                {/* {
                    this.props.activeEvents.event.map((event) => <Event event={event} />)
                } */}
                {/* {/ {this.props.activeEvents.events.map(event  =>  <li  key={event}>{event}</li>)} */}
                <Event event={this.props.activeEvents.Event}/> 
            </div>
        );
    }
}

const mapStateToProps = store => store;

const mapDispatchToProps = dispatch => ({
    updateEvent: (event) => 
        dispatch(updateEventsList())
    
})

export default connect(mapStateToProps, mapDispatchToProps)(EventList);