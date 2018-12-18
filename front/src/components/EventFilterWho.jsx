import React, { Component } from "react";
import { Button, Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import { updateFilter } from "../actions/index";
import "./EventFilterWho.css";
import famille from "../assets/famille.png";
import toutPublic from "../assets/tout-public.png";
import enfants from "../assets/enfants6-12-ans.png";
import handicap from "../assets/handicap.png";


class EventFilterWho extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventsFiltred: null
    };

    this.id = this.props.match.params.id;
  }

  componentWillMount() {}
  eventsFiltred = who => {
    this.props.updateFilter({ who: who });
    this.props.history.push("/events");
  };
  allFilter = who => {
    this.props.updateFilter({ who: who });
    this.props.history.push("/events");
  };

  render() {
    return (
      <div>
        <Container className="buttonsContainer">
          <Row> 
            <Col xl="12" sm="12" md="10" className="titleWho">
            Pour qui ?
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                className="buttonFilter"
                onClick={() =>
                  this.allFilter(
                    "Famille" & "Public en situation de handicap" & "Enfants"
                  )
                }
                color="secondary"
                size="lg"
                block>
                <img className="logoFilter" src={toutPublic} alt="tout public" />
                <div className="textButton">TOUT PUBLIC</div>
              </Button>
            </Col>

            <Col>
              <Button
                className="buttonFilter"
                onClick={() => this.eventsFiltred("Famille")}
                color="secondary"
                size="lg"
                block
              >
                <img className="logoFilter1" src={famille} alt="famille" />
                <div className="textButton2">FAMILLES</div>
              </Button>
            </Col>

            <Col>
              <Button
                className="buttonFilter"
                onClick={() => this.eventsFiltred("Enfants")}
                color="secondary"
                size="lg"
                block
              >
                <img className="logoFilter1" src={enfants} alt="enfants" />
                <div className="textButton2">ENFANTS</div>
              </Button>
            </Col>

            <Col>
              <Button
                className="buttonFilter"
                onClick={() => this.eventsFiltred("Public en situation de handicap")}
                color="secondary"
                size="lg"
                block
              >
                <img className="logoFilter2" src={handicap} alt="handicap" />
                <div className="textButton3">EN SITUATION DE HANDICAP</div>
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default connect(
  null,
  dispatch => ({
    updateFilter: filter => {
      dispatch(updateFilter(filter));
    }
  })
)(EventFilterWho);
