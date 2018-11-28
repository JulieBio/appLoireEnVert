import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addEvent } from '../actions/index';
import Event from '../components/Event';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { NavLink } from "react-router-dom";
//import { Container, Row, Col } from 'reactstrap';

class EventList extends Component {
    componentWillMount() { }
    render() {
        return (

            <div className="EventList">
                {
                    this.props.events.map((event) => <Event event={event} />)
                }
            </div>
        );
    }
}

const mapStateToProps = store => store;

const mapDispatchToProps = dispatch => ({
    addEvent: event => {
        dispatch(addEvent(event));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(EventList);