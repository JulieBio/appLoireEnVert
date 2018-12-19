import React from "react";
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import { updateFilter } from "../actions";
import "./buttons.css";
// Julie lisa : Création d'un container buttons qui met met à jour son state.
// ... on utilise when pour définir le nombre de jour souhaité, puis on met à jour le store avec dispatch
class Buttons extends React.Component {
  render() {
    return (
      <div>
        <Container className="blockButtons">
          <Row>
            <Col xs="4" sm="4" md="4">
              <Button
                className="buttonDates"
                onClick={() => this.props.updateFilter({ when: 15 })}
              >
                15 jours
              </Button>
            </Col>
            <Col xs="4" sm="4" md="4">
              <Button
                className="buttonDates"
                onClick={() => this.props.updateFilter({ when: 30 })}
              >
                1 mois
              </Button>
            </Col>
            <Col xs="4" sm="4" md="4">
              <Button
                className="buttonDates"
                onClick={() => this.props.updateFilter({ when: 90 })}
              >
                3 mois
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateFilter: filter => {
    dispatch(updateFilter(filter));
  }
});
// Julie Lisa : on met null car pas besoin du mapStateToProps
export default connect(
  null,
  mapDispatchToProps
)(Buttons);
