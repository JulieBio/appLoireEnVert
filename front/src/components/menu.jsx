import React, { Component } from "react";

// Julie : liste des links du menu burger
class Menu extends Component {

  // Julie ferme le menu burger et revient à la dernière page
  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div>
        <div className="menuBurger">
          <div className="menuB"><a href="https://loireenvert.fr/">Accès au site internet</a></div>
          <div className="menuB"><a href="https://loireenvert.fr/newsletter/">Newsletter</a></div>
          <div className="menuB"><a href="/quiSommesNous">Qui sommes-nous ?</a></div>
          <div className="menuB"><a href="/partenaires">Partenaires</a></div>
          <div className="menuB"><a href="https://loireenvert.fr/contact/">Contact</a></div>
        </div>
        <div className="espace"> </div>
      </div >
    )
  }
};

export default Menu;