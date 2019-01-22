import React from "react";
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import { updateFilter, updateButton } from "../actions";
import "./buttons.css";

// Julie lisa : Création d'un container buttons qui met met à jour son state.
// ... on utilise when pour définir le nombre de jour souhaité, puis on met à jour le store avec dispatch


class Buttons extends React.Component {
  // Marion : Désactivation du bouton actif afin de savoir sur quel bouton on a cliqué
  // initiation d'un state pour faire la désactivation
  // Monica, j'ai modifié tout le code de buttons.jsx: création d'un state disabled, datesFiltred an buttonDates
  constructor(props) {
    super(props);
    this.state = {
      // disabled: this.props.updateButton,
      datesFiltred: null,
      buttonDates: [
        {
          name: "15 jours",
          when: "15",
          id: "1"
        },
        {
          name: "1 mois",
          when: "30",
          id: "2"
        },
        {
          name: "3 mois",
          when: "90",
          id: "3"
        }
      ]
    };
    this.handleClick = this.handleClick.bind(this);
  }



  //Marion : création d'une fonction pour rendre le bouton cliqué inactif
  //Marion :Désactivation bouton faite en lui ajoutant un id
  //Marion : /!\id attribué à chaque bouton n'est pas le meme que celui des évènements

  handleClick(e) {
    const id = e.target.id;
    console.log("in handleclick", id, "in reducer", this.props.updateButton)
    this.props.changeDisable(id)
  }

  datesFiltred = when => {
    this.props.updateFilter({ when: when });
  };

  render() {
    const { updateButton } = this.props;
    console.log("state de disabled", this.state.disabled)
    return (
      <Container onClick={this.handleClick} className="blockButtons">
        <Row>
          {this.state.buttonDates.map((button, index) => (
            <Col xs="4" sm="4" md="4" key={index}>
              <Button
                disabled={button.id === updateButton}
                id={button.id}
                className="buttonDates"
                onClick={() => this.datesFiltred(button.when)}
                color="secondary"
                size="lg"
                block
              >
                {button.name}
              </Button>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  updateButton: state.buttonDates.disabled,
})
const mapDispatchToProps = dispatch => ({
  updateFilter: filter => {
    dispatch(updateFilter(filter));
  },
  changeDisable: number => dispatch(updateButton(number))
});
// Julie Lisa : on met null car pas besoin du mapStateToProps
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buttons);
