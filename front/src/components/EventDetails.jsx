import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row} from 'reactstrap';
import {
Card,
CardImg,
CardBody,
CardTitle,
CardSubtitle,
CardText
} from "reactstrap";

const EventDetails = ({event}) => (
    <Container>
        <div
            className="cardAccueil"
            onClick={() => this.activitySelected(event)}>

            <Card body outline>
            <CardImg top cardImage src={event.image} alt="Card image cap" classname="images" />
              <CardBody classname="bodyCard">
                <Row classname="description">
                  {/*type*/}
                    <CardTitle className="type">{event.type}</CardTitle>
                </Row>
                <Row>
                  {/*name*/}
                  <CardSubtitle className="nom">{event.name}</CardSubtitle>
                </Row>
                <br/>
                <Row>
                    {/*where*/}
                  <CardSubtitle className="where">{event.where}</CardSubtitle>
                </Row>
                <br/>
                <Row>
                    {/*Place*/}
                  <CardSubtitle className="place">{event.place}</CardSubtitle>
                </Row>
                <br/>
                <Row>
                      {/*city*/}
                  <CardSubtitle className="city">{event.city}</CardSubtitle>
                </Row>
                <br/>
                <Row>
                  {/*date*/}
                <CardSubtitle className="quand">{event.date}</CardSubtitle>
                </Row>
                <br/>
                <Row>
                  {/*time*/}
                  <CardSubtitle className="heure">{event.time}</CardSubtitle>
                </Row>
                <br/>
                <Row>
                  {/*free*/}
                  <CardSubtitle className="free">{event.free}</CardSubtitle>
                </Row>
                <br/>
                <Row>
                  <CardText className="description">{event.description}</CardText>
                </Row>
                <br/>
              </CardBody>
            </Card>
        </div>
     </Container>

);
export default EventDetails;
