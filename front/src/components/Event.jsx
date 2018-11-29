import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row} from 'reactstrap';
import {
Card,
CardImg,
CardBody,
CardTitle,
CardSubtitle,
} from "reactstrap";
import euro from '../asset/euro.png';

const Event = ({event,euro}) => (
    <Container>
        <div
            className="cardAccueil">
            <Card body outline>
            <CardImg top cardImage src={event.image} alt="Card image cap" classname="images" />
              <CardBody classname="bodyCard">
                <Row classname="description">
                    <CardTitle className="type">{event.type}</CardTitle>
                </Row>
                <Row>
                  <CardSubtitle className="nom">{event.name}</CardSubtitle>
                </Row>
                <br/>
                <Row>
                <CardSubtitle className="quand">{event.date}</CardSubtitle>
                </Row>
                <br/>
                <Row>
                  <CardSubtitle className="heure">{event.time}</CardSubtitle>
                </Row>
                <br/>
                <Row>
                  <CardSubtitle className="free">{event.free === "true" ? " " : <img src={this.props.euro} alt='/'/>}</CardSubtitle>
                </Row>
              </CardBody>
            </Card>
        </div>
     </Container>

);
export default Event;