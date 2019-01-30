import React from "react";
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import { updateFilter, updateButton } from "../actions";
import "./buttons.css";

// on utilise when pour définir le nombre de jour souhaité, puis on met à jour le store avec dispatch

class Buttons extends React.Component {
  // Désactivation du bouton actif afin de savoir sur quel bouton on a cliqué
  // initiation d'un state pour faire la désactivation
  // création d'un state disabled, datesFiltred an buttonDates

  constructor(props) {
    super(props);
    this.state = {
      datesFiltred: null,
      buttonDates: [
        {
          name: "15 jours",
          when: 15,
          id: "1"
        },
        {
          name: "1 mois",
          when: 30,
          id: "2"
        },
        {
          name: "3 mois",
          when: 90,
          id: "3"
        }
      ]
    };
    this.handleClick = this.handleClick.bind(this);
  }

  //fonction pour rendre le bouton cliqué inactif
  //Désactivation bouton faite en lui ajoutant un id
  // /!\id attribué à chaque bouton n'est pas le meme que celui des évènements

  handleClick(e) {
    const id = e.target.id;
    this.props.changeDisable(id)
  }

  datesFiltred = when => {
    this.props.updateFilter({ when: when });
  };

  render() {
    const { updateButton } = this.props;
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buttons);
