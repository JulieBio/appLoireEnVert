import React, { Component }  from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Container, CardImg } from "reactstrap";

class EventDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      type: null
    };
    this.id = this.props.match.params.id;
  }

  componentWillMount() {
    axios.get(`/event/${this.id}`).then(result => {
      this.setState({
        image: result.data.image,
        name: result.data.name,
        type: result.data.type,
        who: result.data.who,
        where: result.data.where,
        place: result.data.place,
        city: result.data.city,
        description: result.data.description,
      });
    });
  }

  render() {
    return (
      <Container>
        <div>
          <CardImg src={this.state.image} alt="image evenement"/>
          <p className="nom-event">{this.state.name}</p>
          <p className="type-event">{this.state.type}</p>
          <p className="qui-eventDetails">{this.state.who}</p>
          <p classname="ou-eventDetails">{this.state.where}</p>
          <p className="place-eventDetails">{this.state.place}</p>
          <p className="city-eventDetails">{this.state.city}</p>
          <p className="description-event">{this.state.description}</p>
        </div>
      </Container>
    );
  }
}
      /*const EventDetails = ({event}) => (
        <Container>
          <div
            className="cardAccueil"
            onClick={() => this.activitySelected(event)}>

            <Card body outline>
              <Event />
              <CardBody classname="bodyCard">
                <Row>
                    {/*who}
                  <CardSubtitle className="qui-eventDetails">{event.who}</CardSubtitle>
                </Row>
                <br/>
                <Row>
                    {/*where}
                  <CardSubtitle className="where-eventDetails">{event.where}</CardSubtitle>
                </Row>
                <br/>
                <Row>
                    {/*Place}
                  <CardSubtitle className="place-eventDetails">{event.place}</CardSubtitle>
                </Row>
                <br/>
                <Row>
                      {/*city}
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

);*/
export default EventDetails;
