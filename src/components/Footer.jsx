import React from "react";
import phone from "../images/phone.svg";
import portfolio from "../images/portfolio.svg";
import github from "../images/github.svg";

const Footer = () => {

    return <footer>
        <div className="contain-footer">
            <div className="info-footer">
                <div className="made-by">
                    <h4>Design crée par Emmanuel DONAHUE avec la librairie <a href="https://fr.legacy.reactjs.org/" target="_blank" className="react">React</a>.</h4>
                    <h4>Inspiré par le site de l'entreprise <a href="https://www.genieclimfrance.fr/" target="_blank" className="react">Génie Clim France</a>.</h4>
                </div>
                <div className="contact">
                    <h4>Contact</h4>
                    <div className="contain-contact">
                        <div className="contain-icon-footer">
                            <img src={phone} alt="logo téléphone" />
                            <p>06 26 71 96 00</p>
                        </div>
                        <div className="contain-icon-footer">
                            <img src={portfolio} alt="logo portfolio" />
                            <p>emmanuel.donahue@hotmail.fr</p>                            
                        </div>
                        <a className="contain-icon-footer" href="https://github.com/Ednahe" target="_blank">
                            <img src={github} alt="logo github" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
}

export default Footer;