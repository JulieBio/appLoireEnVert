import React, { Component }  from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
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
        type: result.data.type,
        who: result.data.who,
        where: result.data.where,
        place: result.data.place,
        city: result.data.city,
        description: result.data.description,
      });
      console.log(result.data.name);
      console.log(result.data.name);
    });
  }

  render() {
    return (
      <div>
        <p>{this.state.name}</p>
        <p>{this.state.type}</p>
        <p>{this.state.who}</p>
        <p>{this.state.where}</p>
        <p>{this.state.place}</p>
        <p>{this.state.city}</p>
        <p>{this.state.description}</p>
      </div>
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
