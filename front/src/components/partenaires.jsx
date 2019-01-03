import React from 'react';
import { NavLink } from 'reactstrap';
import { Container, Card } from "reactstrap";
import cahl from '../assets/CALHL-2017.png';
import coeurvert from '../assets/logo coeur OFFICIEL.png';
import aura from '../assets/aura-couleur.jpg';
import dept from '../assets/logo-departement-loire.png';
import metroloire from '../assets/logo sem rvb_RVB.jpg';
import saintet from '../assets/saint-etienne-2016.jpg';
import edf from '../assets/EDF_Logo_RGB_300_F.jpg';

// Julie : logos cliquables avec lien sur le site internet de chaque partenaire

const Partenaires = (props) => {
    return (
        <Container className="toutPartenaires">
            <Card>
                <div className="partenaires">
                    <h2 >Partenaires</h2>

                    < div className="row">

                        <NavLink classname="part col-xs-12 col-md-6 col-lg-4" href="https://www.ca-loirehauteloire.fr/home-part.html">
                            <img src={cahl} width="200" alt="home"></img></NavLink>

                        <NavLink classname="part col-xs-12 col-md-6 col-lg-4" href="https://www.asse.fr/">
                            <img src={coeurvert} width="150" alt="home"></img></NavLink>

                        <NavLink classname="part col-xs-12 col-md-6 col-lg-4" href="https://www.auvergnerhonealpes.fr/">
                            <img src={aura} width="250" alt="home"></img></NavLink>

                        <NavLink classname="part col-xs-12 col-md-6 col-lg-4" href="https://www.loire.fr/">
                            <img src={dept} width="200" alt="home"></img></NavLink>

                        <NavLink classname="part col-xs-12 col-md-6 col-lg-4" href="https://www.saint-etienne-metropole.fr/">
                            <img src={metroloire} width="230" alt="home"></img></NavLink>

                        <NavLink classname="part col-xs-12 col-md-6 col-lg-4" href="https://www.saint-etienne.fr/">
                            <img src={saintet} width="230" alt="home"></img></NavLink>

                        <NavLink classname="part col-xs-12 col-md-6 col-lg-4" href="https://www.edf.fr/">
                            <img src={edf} width="200" alt="home"></img></NavLink>

                        <div className="espace"> </div>
                    </div>
                </div>
            </Card>
        </Container>
    );
};

export default Partenaires;