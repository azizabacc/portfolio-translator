import '../css/about.css'
import '../css/services-icons.css'
import ServicesIcons from './ServivesIcons';
import { Link } from 'react-scroll';
import React, { useEffect, useState } from 'react';

function About() {
    const [showAboutDesc, setShowAboutDesc] = useState(false);

    useEffect(() => {
      // Utilisez setTimeout pour définir un délai avant d'afficher l'élément
      const timer = setTimeout(() => {
        setShowAboutDesc(true);
      }, 1000); // Définissez la durée souhaitée en millisecondes (1 seconde dans cet exemple)
  
      // Assurez-vous de nettoyer le délai lorsque le composant est démonté
      return () => clearTimeout(timer);
    }, []);
    return (
        <div className="about-section">


            <div className='about-desc'>
            <ServicesIcons/>

            <div className={`about-desc-container ${showAboutDesc ? 'slide-in' : ''}`}>
            <h2 className='section-subtitle'>TARIF :  PRIX AU MOT - Tarif minimum</h2>
            <h2 className='section-subtitle'>DEVIS GRATUIT </h2>



            </div>
            <button className='contact-btn'><Link to="contact" spy={true} smooth={true} duration={500}>Contact</Link></button>

            </div>
        </div>
    );
}

export default About;
