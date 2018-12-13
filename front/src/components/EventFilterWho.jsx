import React, { Component } from "react";
import { Button, Container, Row, Col } from "reactstrap";
import {connect} from "react-redux";
import { updateFilter } from "../actions/index";
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

    // this.id = this.props.match.params.id;
    
  }

  // componentWillMount() {

  // }

  eventsFiltred = who => {
    this.props.updateFilter({ who: who });
    this.props.history.push("/events");
  }
  allFilter= who  =>{
    this.props.updateFilter({ who: who });
    this.props.history.push("/events");

  }


  render() {
    return (
     
      <Container className="buttonsContainer">

        <Row className="titleWho">Pour qui ?</Row>
          <Button className="buttonFilter" onClick={() => this.allFilter("Famille" & "Public en situation de handicap" & "Enfants")} color="secondary" size="lg" block>
          <img className="logoFilter" src={toutPublic} alt="tout public"/>
          <div className="textButton">TOUT PUBLIC</div>
          </Button>
        
          <Button className="buttonFilter" onClick={() => this.eventsFiltred("Famille")} color="secondary" size="lg" block>
          <img className="logoFilter1" src={famille} alt= "famille"/> FAMILLES
          </Button>

          <Button className="buttonFilter" onClick={() => this.eventsFiltred("Enfants")} color="secondary" size="lg" block>
          <img className="logoFilter" src={enfants} alt="enfants"/> ENFANTS
          </Button>

          <Button className="buttonFilter" onClick={() => this.eventsFiltred("Public en situation de handicap")} color="secondary" size="lg" block>
          <img className="logoFilter" src={handicap} alt="handicap"/> EN SITUATION DE HANDICAP
          </Button>
      </Container>  
     

    );
  }
}

export default connect(null,
  dispatch => ({
    updateFilter: filter => {
      dispatch(updateFilter(filter));
    }
  }))(EventFilterWho);
