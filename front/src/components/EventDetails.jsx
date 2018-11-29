import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {
Card,
CardBody,
CardSubtitle,
CardText,
Button,
Container,
Row
} from "reactstrap";
import Event from './components/Event';
import "./Event.css";
import axios from "axios";

class EventDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      type: null
    };
    console.log(this.state.name);
    console.log(this.state.type);
    this.id = this.props.match.params.id;
  }

  componentWillMount() {
    axios.get(`/event/${this.id}`).then(result => {
      this.setState({
        name: result.data.name,
        type: result.data.type
      });
      console.log(result.data.name);
      console.log(result.data.name);
    });
  }

  render() {
    return (
      <div>
        hello
        <p>{this.id}</p>
        <p>{this.state.name}</p>
        <p>{this.state.type}</p>
      </div>
    );
  }
}
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
