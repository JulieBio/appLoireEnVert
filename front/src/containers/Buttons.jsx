import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import { connect } from 'react-redux';
import { updateFilter } from '../actions'

// Julie lisa : Création d'un container buttons qui met met à jour son state.
// ... on utilise when pour définir le nombre de jour souhaité, puis on met à jour le store avec dispatch
class Buttons extends React.Component {
  render() {
    return (
      <div className="blockButtons">
        <Button className="buttonDates" onClick={()=>this.props.updateFilter({when:15})}>15 jours</Button>
        <Button className="buttonDates" onClick={()=>this.props.updateFilter({when:30})}>1 mois</Button>
        <Button className="buttonDates" onClick={()=>this.props.updateFilter({when:90})}>3 mois</Button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateFilter: filter => {
    dispatch(updateFilter(filter));
  }
})
// Julie Lisa : on met null car pas besoin du mapStateToProps
export default connect(
  null,
  mapDispatchToProps
)(Buttons);