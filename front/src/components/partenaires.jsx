import React, { Component } from "react";
import { NavLink } from "reactstrap";
import { Container, Card, Col } from "reactstrap";
import cahl from "../assets/CALHL-2017.png";
import coeurvert from "../assets/logo coeur OFFICIEL.png";
import aura from "../assets/aura-couleur.jpg";
import dept from "../assets/logo-departement-loire.png";
import metroloire from "../assets/logo sem rvb_RVB.jpg";
import saintet from "../assets/saint-etienne-2016.jpg";
import edf from "../assets/EDF_Logo_RGB_300_F.jpg";
import HeadBack from "./headBack";
import retourFleche from "../assets/retourFleche.png";

// Julie : logos cliquables avec lien sur le site internet de chaque partenaire

const styleBack = {
  goBack: {
    background: `url(${retourFleche})`,
    opacity: "0.5",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    position: "absolute",
    height: "25vmin",
    width: "10vmin",
    paddingTop: "8px",
    top: "-16vmin"
  }
};

class Partenaires extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div>
        <Container className="mainContainer">
          <HeadBack />
          <Col className="colMenuPages">
            <div>
              <div style={styleBack.goBack} onClick={this.goBack} />
            </div>
            <Card className="cardMenuPages">
              <div className="contentMenuPages">
                <h2>Partenaires</h2>
                <div className="row">
                  <NavLink
                    classname="part col-xs-12 col-md-6 col-lg-4"
                    href="https://www.ca-loirehauteloire.fr/home-part.html"
                  >
                    <img src={cahl} width="200" alt="home" />
                  </NavLink>

                  <NavLink
                    classname="part col-xs-12 col-md-6 col-lg-4"
                    href="https://www.asse.fr/"
                  >
                    <img src={coeurvert} width="150" alt="home" />
                  </NavLink>

                  <NavLink
                    classname="part col-xs-12 col-md-6 col-lg-4"
                    href="https://www.auvergnerhonealpes.fr/"
                  >
                    <img src={aura} width="250" alt="home" />
                  </NavLink>

                  <NavLink
                    classname="part col-xs-12 col-md-6 col-lg-4"
                    href="https://www.loire.fr/"
                  >
                    <img src={dept} width="200" alt="home" />
                  </NavLink>

                  <NavLink
                    classname="part col-xs-12 col-md-6 col-lg-4"
                    href="https://www.saint-etienne-metropole.fr/"
                  >
                    <img src={metroloire} width="230" alt="home" />
                  </NavLink>

                  <NavLink
                    classname="part col-xs-12 col-md-6 col-lg-4"
                    href="https://www.saint-etienne.fr/"
                  >
                    <img src={saintet} width="230" alt="home" />
                  </NavLink>

                  <NavLink
                    classname="part col-xs-12 col-md-6 col-lg-4"
                    href="https://www.edf.fr/"
                  >
                    <img src={edf} width="200" alt="home" />
                  </NavLink>

                  <div className="espace"> </div>
                </div>
              </div>
            </Card>
          </Col>
        </Container>
      </div>
    );
  }
}

export default Partenaires;
