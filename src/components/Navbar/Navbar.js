import React, { useState, useEffect } from 'react';
import LanguageSelector from '../Languages/LanguageSelector';
import './navbar.css';
import { Link } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar({ language, onLanguageChange }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const scrollToHome = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Nettoyez l'écouteur d'événements lorsqu'un composant est démonté
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Le tableau vide signifie que cela ne dépend d'aucune variable et ne s'exécute qu'une fois lors du montage.

  return (
    <div className='header'>
      <div className='top-mobile-header'>
        <div className="navbar-logo" onClick={scrollToHome}></div>
        <div className="menu-toggle" onClick={toggleMobileMenu}>
          <FontAwesomeIcon className='burger-menu' icon={faBars} />
        </div>
      </div>

      <div className={`menu ${showMobileMenu ? 'show' : ''}`}>
        <ul className="navbar">
          <li onClick={toggleMobileMenu}><Link activeClass="active" to="home" spy={true} smooth={true} duration={500}>{language.home}</Link></li>
          <li>.</li>

          <li><Link to="services" spy={true} smooth={true} duration={500} onClick={toggleMobileMenu}>{language.services}</Link></li>
          <li>.</li>

          <li><Link to="rate" spy={true} smooth={true} duration={500} onClick={toggleMobileMenu}>{language.rate}</Link></li>
          <li>.</li>

          <li><Link to="contact" spy={true} smooth={true} duration={500} onClick={toggleMobileMenu}>{language.contact}</Link></li>
        </ul>
        <LanguageSelector
          language={language}
          onLanguageChange={onLanguageChange}
        />
      </div>
    </div>
  );
}

export default Navbar;
