import LanguageSelector from '../Languages/LanguageSelector'; // Importez le composant LanguagesSelector (corrigez le nom ici)
import './navbar.css'
import { Link } from 'react-scroll';
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'; // Importez Link, Element et les autres composants de react-scroll
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
function Navbar({ language, onLanguageChange }) {

  const [showMenu, setShowMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  }
  const scrollToHome = () => {
    scroll.scrollToTop();
  };
  return (
    <div className='header'>
      <div className='top-mobile-header'>
        <div className="navbar-logo" onClick={scrollToHome}></div>
        <div className="menu-toggle" onClick={toggleMenu}>
          <FontAwesomeIcon className='burger-menu' icon={faBars} onClick={toggleMobileMenu} />
        </div>
      </div>

      <div className={`menu ${showMobileMenu ? 'show' : ''}`}>
        <ul className="navbar">
          <li><Link activeClass="active" to="home" spy={true} smooth={true} duration={500}>{language.home}</Link></li>
          <li>.</li>

          <li><Link to="services" spy={true} smooth={true} duration={500}>{language.services}</Link></li>
          <li>.</li>

          <li><Link to="rate" spy={true} smooth={true} duration={500}>{language.rate}</Link></li>
          <li>.</li>

          <li><Link to="contact" spy={true} smooth={true} duration={500}>{language.contact}</Link></li>
        </ul>
        <LanguageSelector language={language} onLanguageChange={onLanguageChange} />
      </div>

    </div>
  );
}

export default Navbar;
