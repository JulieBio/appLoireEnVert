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
  // Marion : Désactivation du bouton actif afin de savoir sur quel bouton on a cliqué
  //initiation d'un state pour faire la désactivation
  constructor(props) {
    super(props);
    this.state = {
      disabled: "1"
    };
    this.handleClick = this.handleClick.bind(this);
  }
//Marion : création d'une fonction pour rendre le bouton cliqué inactif
//Marion :Désactivation bouton faite en lui ajoutant un id
//Marion : /!\id attribué à chaque bouton n'est pas le meme que celui des évènements
  handleClick(e) {
    const id = e.target.id
    this.setState({ disabled: id })
  }


  render() {
    return (

      <div onClick={this.handleClick}>
        <Container className="blockButtons">
          <Row>
            <Col xs="4" sm="4" md="4">
              {/*Marion : appelle du state à chaque bouton et si la valeur du state correspond à l'id du bouton, le bouton passe en inactif*/}
              <Button disabled={this.state.disabled === "1"} id="1" className="buttonDates"
                onClick={() => this.props.updateFilter({ when: 15 })}
              >
                15 jours
              </Button>
            </Col>
            <Col xs="4" sm="4" md="4">
              <Button disabled={this.state.disabled === "2"} id="2"
                className="buttonDates"
                onClick={() => this.props.updateFilter({ when: 30 })}
              >
                1 mois
              </Button>
            </Col>
            <Col xs="4" sm="4" md="4">
              <Button disabled={this.state.disabled === "3"} id="3"
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
