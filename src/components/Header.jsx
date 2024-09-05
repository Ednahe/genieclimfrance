import React, { useState } from "react";
import logo from "../images/logo.jpg";
import location from "../images/location.svg";
import phone from "../images/phone.svg";
import burgerMenu from "../images/burger.svg";
import cross from "../images/cross.svg";

const Header = () => {
  const [burger, setBurger] = useState(false);

  const activeMenu = () => {
    setBurger(!burger);
  };

  return (
    <header>
      <div className="contain-top-header">
        <div className="contain-logo">
          <img src={logo} alt="logo de l'entreprise génie clim" />
        </div>
        <div className="contain-info">
          <a href="#" className="info">
            <div className="contain-svg-header">
              <img src={location} className="svg" />
            </div>
            Où nous trouver ?
          </a>
          <a href="#" className="info">
            <div className="contain-svg-header">
              <img src={phone} className="svg" />
            </div>
            09 72 12 14 01
          </a>
          <a href="https://www.genieclimfrance.fr/test-d-eligibilite" className="btn-info">
            TEST D'ÉLIGIBILITÉ
          </a>
        </div>
      </div>
      <nav>
        <ul>
          <li className="burger" onClick={activeMenu}>
            <img src={burger ? cross : burgerMenu} />
          </li>
          <li className={`contain-nav ${burger ? "open" : ""}`}>
            <a href="https://www.genieclimfrance.fr/nos-produits" className="a-nav">
              QUI SOMMES-NOUS
            </a>
            <a href="https://www.genieclimfrance.fr/nos-produits" className="a-nav">
              NOS SERVICES
            </a>
            <a href="https://www.genieclimfrance.fr/nos-produits" className="a-nav">
              ISOLATION
            </a>
            <a href="https://www.genieclimfrance.fr/nos-produits" className="a-nav">
              POMPES A CHALEUR
            </a>
            <a href="https://www.genieclimfrance.fr/nos-produits" className="a-nav">
              BALLONS THERMODYNAMIQUE
            </a>
            <a href="https://www.genieclimfrance.fr/solutions-de-financement" className="a-nav">
              ACTUALITES
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
