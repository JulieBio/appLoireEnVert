import React, { Component } from 'react';
import axios from 'axios';
import Event from '../components/Event';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { NavLink } from "react-router-dom";
//import { Container, Row, Col } from 'reactstrap';

class EventList extends Component {
    constructor(props){
        super(props);
        this.state = {
            events:[],
        }
    
    }

    componentWillMount(){
       axios.get('/event')
            .then(result => {
            console.log(result.data);
            this.setState({
                events:result.data.events||[],
            });
        })
    }
    // activitySelected = event => {
    //     this.setState({ type: event.type });
    //   };

    render () {
        const {events} = this.state;
        
        return (

            <div className="EventList">
                {
                    events.map((event) => <Event event={event}/>)
                }
            </div>
        );
    }
};

export default EventList;