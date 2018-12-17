import React from 'react';
import { NavLink } from 'reactstrap';
import cal from '../assets/cal.png';
import coeurvert from '../assets/coeurvert.png';
import aura from '../assets/aura.png';
import deploire from '../assets/deploire.png';
import metroloire from '../assets/metroloire.jpg';
import saintet from '../assets/saintet.png';
import edf from '../assets/edf.png';

// Julie : logos cliquables avec lien sur le site internet de chaque partenaire

const Partenaires = (props) => {
    return (
        <div className="partenaires">
            <h2 >Partenaires</h2>
            < div className="row">

                <NavLink classname="part col-xs-12 col-md-6 col-lg-4" href="https://www.ca-loirehauteloire.fr/home-part.html">
                    <img src={cal} width="200" alt="home"></img></NavLink>

                <NavLink classname="part col-xs-12 col-md-6 col-lg-4" href="https://www.asse.fr/">
                    <img src={coeurvert} width="150" alt="home"></img></NavLink>

                <NavLink classname="part col-xs-12 col-md-6 col-lg-4" href="https://www.auvergnerhonealpes.fr/">
                    <img src={aura} width="250" alt="home"></img></NavLink>

                <NavLink classname="part col-xs-12 col-md-6 col-lg-4" href="https://www.loire.fr/">
                    <img src={deploire} width="200" alt="home"></img></NavLink>

                <NavLink classname="part col-xs-12 col-md-6 col-lg-4" href="https://www.saint-etienne-metropole.fr/">
                    <img src={metroloire} width="230" alt="home"></img></NavLink>

                <NavLink classname="part col-xs-12 col-md-6 col-lg-4" href="https://www.saint-etienne.fr/">
                    <img src={saintet} width="230" alt="home"></img></NavLink>

                <NavLink classname="part col-xs-12 col-md-6 col-lg-4" href="https://www.edf.fr/">
                    <img src={edf} width="200" alt="home"></img></NavLink>
                    
                <div className="espace"> </div>
            </div>
        </div>
    );
};

export default Partenaires;