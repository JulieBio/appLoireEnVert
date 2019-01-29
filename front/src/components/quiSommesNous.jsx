import React, { Component } from "react";
import { Container, Card, Col } from "reactstrap";
import { CardImg } from "reactstrap";
import fneloire from "../assets/FNE_Loire_logo.png";
import HeadBack from "./headBack";
import retourFleche from "../assets/retourFleche.png";

// Julie: voir si logo ok car link ne fonctionne pas

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
class QuiSommesNous extends Component {
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
              <div>
                <h2 className="contentMenuPages">Qui sommes-nous ?</h2>

                <div className="texteQuiSommesNous">
                  <p>FNE Loire</p>
                  <div>
                    <p>
                      Votre fédération départementale pour la protection de
                      l’environnement France Nature Environnement Loire,
                      association loi 1901, à but non lucratif, oeuvre pour la
                      protection de la nature.
                    </p>
                    <br />
                    <p>
                      Elle regroupe une vingtaine d’associations locales. Elle
                      agit pour l’environnement par :
                    </p>
                    <ul>
                      <li>des actions de préservation de la biodiversité,</li>
                      <li>de la veille écologique et des inventaires,</li>
                      <li>
                        des actions de communication et de sensibilisation,
                      </li>
                      <li>
                        une participation active au sein de 1 500 commissions et
                        comités officiels,
                      </li>
                      <li>des actions juridiques si nécessaire,</li>
                      <li>l’éducation pour tous.</li>
                    </ul>
                  </div>
                  <CardImg
                    className="imgpart"
                    src={fneloire}
                    alt="logo France Nature Environnement Loire"
                  />
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

export default QuiSommesNous;
