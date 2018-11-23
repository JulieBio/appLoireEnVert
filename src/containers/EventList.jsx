import React, { Component } from 'react';
//import axios from 'axios';
import Event from '../components/Event';
import 'bootstrap/dist/css/bootstrap.min.css';

const events = [
    {
    nom: "La biodiversité et les corridors biologiques",
    image:
    "http://insectes-de-france.fr/wp-content/uploads/Saint-Cloud-400x300.jpg",
    quand: "22/12/2018",
    type: "exposition",
    lieu: "Ecopôle du Forez",
    free: true,
    information:
    "La biodiversité, ou diversité biologique, constitue le tissu vivant de la planète. Elle recouvre l’ensemble des formes de vie sur Terre, les relations qui existent entre elles et avec leurs milieux depuis l’origine commune de la vie."
    },
    {
    nom: "Event2",
    image:
    "https://www.letelegramme.fr/images/2018/10/16/sortie-nature-le-jeune-phoque-fait-le-show_4219359_868x434p.jpg?v=1",
    quand: "22/12/2018",
    type: "exposition",
    lieu: "Ecopôle du Forez",
    free: true,
    information:
    "La biodiversité, ou diversité biologique, constitue le tissu vivant de la planète. Elle recouvre l’ensemble des formes de vie sur Terre, les relations qui existent entre elles et avec leurs milieux depuis l’origine commune de la vie."
    },
    {
    nom: "Event3",
    image:
    "https://www.valdeloire-france.com/sites/default/files/styles/sit_full/public/sit/data/media/images/fmapdl044v50i2in/decouverte-du-marais-de-goulaine-en-famille-2013.jpg",
    quand: "22/12/2018",
    type: "exposition",
    lieu: "Ecopôle du Forez",
    free: true,
    information:
    "La biodiversité, ou diversité biologique, constitue le tissu vivant de la planète. Elle recouvre l’ensemble des formes de vie sur Terre, les relations qui existent entre elles et avec leurs milieux depuis l’origine commune de la vie."
    }
    ];
     
     
     
 
class EventList extends Component {
    constructor(props){
        super(props);
        this.state = {
            events:[],
        }
    
    }

    //componentWillMount(){
    //    axios.get('https://localhost:5000/events)
        //     .then(result => {
        //     console.log(result.data.events[0]);
        //     this.setState({
        //         events:result.data.cards,
        //     });
        // })
    //}

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