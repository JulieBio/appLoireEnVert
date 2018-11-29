import React, { Component } from 'react';
import axios from 'axios';
import Event from '../components/Event';
import '../components/Event.css';
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

 //axios qui appelle les évènements en bdd  
    componentWillMount(){
       axios.get('/event') // correspond à l'adresse http://localhost:5000 modifié dans package json du dossier front ajout ligne proxy
            .then(result => {
            this.setState({
                events:result.data.events||[],
            });
        })
    }

   

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