import React, { Component } from "react";
import { Link } from "react-router-dom";
import HeadNoBack from "./headNoBack";
import { Container } from "reactstrap";

// Julie : liste des links du menu burger
class Menu extends Component {
  // Julie ferme le menu burger et revient à la dernière page

  render() {
    return (
      <div>
        <Container className="mainContainer">
          <HeadNoBack />
          <div className="menuBurger">
            <div className="menuB">
              <a href="https://loireenvert.fr/">Accès au site internet</a>
            </div>

            <div className="menuB">
              <a href="https://loireenvert.fr/newsletter/">Newsletter</a>
            </div>

            {/* Julie : Link permet de ne pas recharger la page */}
            <Link to="/quiSommesNous">
              <div className="menuB">Qui sommes-nous ?</div>
            </Link>

            <Link to="/partenaires">
              <div className="menuB">Partenaires</div>
            </Link>

            <div className="menuB">
              <a href="https://loireenvert.fr/contact/">Contact</a>
            </div>
          </div>
          <div className="espace"> </div>
        </Container>
      </div>
    );
  }
}

export default Menu;
