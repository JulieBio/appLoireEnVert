import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row} from 'reactstrap';
import backgroundEuro from '../assets/euro.png'
import {
Card,
CardImg,
CardBody,
CardTitle,
CardSubtitle,
} from "reactstrap";
const styleEuro = {
  euro: {
    background: `url(${backgroundEuro})`,
    backgroundSize: 'contain',
    
    backgroundRepeat: 'no-repeat',
    height: '5vh',
    width: '5vh',
    //padding: '5px',
  }
}
const Event = ({event}) => (
    <Container>
        <div
            className="cardAccueil">
            <Card body outline>
            <CardImg top  src={event.image} alt="Card image cap" className="images" />
              <CardBody className="bodyCard">
                <Row className="description">
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
                  <CardSubtitle className="free">{event.free === "true" ? <h1></h1> : <div style={styleEuro.euro} ></div>}</CardSubtitle>
                </Row>
              </CardBody>
            </Card>
        </div>
     </Container>

);
export default Event;