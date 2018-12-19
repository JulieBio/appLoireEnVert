import React from 'react';
import { NavLink } from 'reactstrap';
import { Container, Card } from "reactstrap";
import cahl from '../assets/cahl.png';
import coeurvert from '../assets/coeurvert.png';
import aura from '../assets/aura.png';
import dept from '../assets/dept.png';
import metroloire from '../assets/metroloire.jpg';
import saintet from '../assets/saintet.png';
import edf from '../assets/edf.png';

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