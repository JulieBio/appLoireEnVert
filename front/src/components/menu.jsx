import React, { Component } from "react";
import close from "../assets/close.png";

//Julie pour la croix "close"
const styleClose = {
  goBack: {
    background: `url(${close})`,
    opacity: "0.5",
    backgroundSize: "55%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "6vh",
    width: "6vh",
  }
};

// Julie : liste des links du menu burger
class Menu extends Component {

  // Julie ferme le menu burger et revient à la dernière page
  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div>
        <div className="menuClose"
          style={{
            // position: "fixed",
            backgroundColor: "rgb(240,240,240,0.5)",
            height: "6vh",
            width: "6vh",
            borderRadius: "25px",
            zIndex: "2"
          }}>

          <div className="closeCross" style={styleClose.goBack} onClick={this.goBack} />
        </div>
        
        <div className="menuBurger">
          <div className="menuB"><a href="https://loireenvert.fr/">Accès au site internet</a></div>
          <div className="menuB"><a href="/event">Paramètres</a></div>
          <div className="menuB"><a href="/event">Mon compte</a></div>
          <div className="menuB"><a href="/event">Newsletter</a></div>
          <div className="menuB"><a href="/quiSommesNous">Qui sommes-nous ?</a></div>
          <div className="menuB"><a href="/partenaires">Partenaires</a></div>
          <div className="menuB"><a href="https://loireenvert.fr/contact/">Contact</a></div>
          <div className="menuB"><a href="/event">Vos données</a></div>
        </div>
        <div className="espace"> </div>
      </div >
    )
  }
};


export default Menu;