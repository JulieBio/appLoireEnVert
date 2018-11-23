import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {
Card,
CardImg,
CardBody,
CardTitle,
CardSubtitle,
} from "reactstrap";

const Event = ({event}) => (
    <div>
        <Card body outline color="primary">
        <CardImg top width="80%" src={event.image} alt="Card image cap" />
        <CardBody>
            <CardTitle>{event.type}</CardTitle>
            <CardSubtitle>{event.name}</CardSubtitle>
            <CardSubtitle>{event.date}</CardSubtitle>
            <CardSubtitle>{event.time}</CardSubtitle>   
        </CardBody>
        </Card>
    </div>
    // <div className = "event">
    //     <img src = {event.image} alt="/"/>
    //     <h1>{event.type}</h1>
    //     <h2>{event.name}</h2>
    //     <h2>{event.date}</h2>
    //     <h2>{event.time}</h2>
    //     <div className="price">
    //         {event.price}
    //     </div>
    // </div>
);
export default Event;