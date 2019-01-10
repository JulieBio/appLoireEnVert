import React, { Component } from "react";
import { Button, Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import { updateFilter } from "../actions/index";
import famille from "../assets/famille.png";
import toutPublic from "../assets/tout-public.png";
import enfants from "../assets/enfants6-12-ans.png";
import handicap from "../assets/handicap.png";
import HeadNoBack from "./headNoBack";
import "./EventFilterWhereWho.css";

const styles = {
  buttonFilter: { alignItems: "center", display: "flex" }
};

class EventFilterWho extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventsFiltred: null, //state crée vider pour ensuite pusher sur lui les données.
      buttonList: [
        {
          name: "Tout Public",
          filter: "%%",
          image: toutPublic
        },
        {
          name: "Famille",
          filter: "Famille",
          image: famille
        },
        {
          name: "Enfants",
          filter: "Enfants",
          image: enfants
        },
        {
          name: "En situation de handicap",
          filter: "Public en situation de handicap",
          image: handicap
        }
      ]
    };

    this.id = this.props.match.params.id;
  }

  eventsFiltred = who => {
    this.props.updateFilter({ who: who });
    this.props.history.push("/events");
  };

  render() {
    return (
      <div>
        <Container className="mainContainer">
          <HeadNoBack />
          <Row>
            <Col xl="12" sm="12" md="12" className="titleWhoWhere">
              Pour qui ?
            </Col>
          </Row>

          <Row>
            {this.state.buttonList.map(button => (
              <Col xs="12" sm="12" md="12">
                <Button
                  className="buttonFilterWhoWhere"
                  onClick={() => this.eventsFiltred(button.filter)}
                  color="secondary"
                  size="lg"
                  block
                >
                  <Container>
                    <Row>
                      <Col xs="3">
                        <img src={button.image} alt="button filter" />
                      </Col>
                      <Col xs="9" style={styles.buttonFilter}>
                        <p className="titleFilter">
                          {button.name.toUpperCase()}
                        </p>
                      </Col>
                    </Row>
                  </Container>
                </Button>
              </Col>
            ))}
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
