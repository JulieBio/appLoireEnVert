import React from 'react';

// Julie : liste des links du menu burger
const Menu = (props) => {
  return (    
    <div>
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
    </div>

  );
};

export default Menu;