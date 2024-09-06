import React from "react";
import arrowRight from "../images/angle-right.svg";

const Presentation = ({ goToSlide }) => {

    return <>
            <h1>Bonjour chers recruteurs de Génie <span className="span-title">C</span>lim France.</h1>
            <p className="p-presentation">Voici une ébauche de design contenant un burger menu fonctionnel et un slider de 5 images</p>
            <p className="p-presentation">Bien entendu tout est responsive et adaptable sur tous types d'écrans</p>
            <p className="p-presentation">Bonne visualisation</p>
            <div className="go-slide" onClick={goToSlide}>Lancer les slides
                <div className="contain-arrow-right">
                    <img src={arrowRight} />
                </div>
            </div>
           </>
}

export default Presentation;