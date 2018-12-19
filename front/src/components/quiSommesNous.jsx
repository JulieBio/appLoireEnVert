import React from 'react';
import { CardImg } from 'reactstrap';
import fneloire from '../assets/fneloire.png';

// Julie: voir si logo ok car link ne fonctionne pas

const QuiSommesNous = (props) => {
    return (
        <div className="status" >
            <h2 className="quiSommesNous">Qui sommes-nous ?</h2>
            <div className="texteQuiSommesNous">
                <p>FNE Loire</p>
                <div>
                    <p>
                        Votre fédération départementale pour la protection de l’environnement
                        France Nature Environnement Loire, association loi 1901, à but non lucratif, oeuvre pour la protection de la nature.
                </p>
                    <br />
                    <p>
                        Elle regroupe une vingtaine d’associations locales. Elle agit pour l’environnement par :
                    </p>
                    <ul>
                        <li>des actions de préservation de la biodiversité,</li>
                        <li>de la veille écologique et des inventaires,</li>
                        <li>des actions de communication et de sensibilisation,</li>
                        <li>une participation active au sein de 1 500 commissions et comités officiels,</li>
                        <li>des actions juridiques si nécessaire,</li>
                        <li>l’éducation pour tous.</li>
                    </ul>
                </div>
                <CardImg className="imgpart" src={fneloire} alt="logo France Nature Environnement Loire" />
                <div className="espace"> </div>
            </div>
        </div>
    );
};

export default QuiSommesNous;