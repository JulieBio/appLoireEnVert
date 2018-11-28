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
            <CardSubtitle>{event.free}</CardSubtitle>
        </CardBody>
        </Card>
    </div>

);
export default Event;