import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row} from 'reactstrap';
import {
Card,
CardBody,
CardSubtitle,
CardText,
Button
} from "reactstrap";
import Event from './components/Event';

const EventDetails = ({event}) => (
    <Container>
        <div

            className="cardAccueil"
            onClick={() => this.activitySelected(event)}>

            <Card body outline>
              <Event />
              <CardBody classname="bodyCard">
                <Row>
                    {/*who*/}
                  <CardSubtitle className="qui-eventDetails">{event.who}</CardSubtitle>
                </Row>
                <br/>
                <Row>
                    {/*where*/}
                  <CardSubtitle className="where-eventDetails">{event.where}</CardSubtitle>
                </Row>
                <br/>
                <Row>
                    {/*Place*/}
                  <CardSubtitle className="place-eventDetails">{event.place}</CardSubtitle>
                </Row>
                <br/>
                <Row>
                      {/*city*/}
                  <CardSubtitle className="city-eventDetails">{event.city}</CardSubtitle>
                </Row>
                <br/>
                <Row>
                  <CardText className="description-eventDetails">{event.description}</CardText>
                </Row>
                <br/>
              </CardBody>
              <Button src="https://loireenvert.fr/">Inscription</Button>
            </Card>
        </div>
     </Container>

);
export default EventDetails;
