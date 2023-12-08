import './about.css'
import ServicesIcons from '../ServicesIcons/ServivesIcons';
import { Link } from 'react-scroll';
import React, { useEffect, useState } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/all';

function About() {
  const [showAboutDesc, setShowAboutDesc] = useState(false);
  useEffect(() => {
    // Enregistrez le plugin ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Animation GSAP
    gsap.to('.about-title', {
      color: 'white',
      duration: 1000,
      scrollTrigger: {
        trigger: '.about-title',//'#trigger-element'
        start: 'top center', // 'top 20%' 'top 100px' start: '#trigger-element': Déclenche l'animation lorsque le haut de l'élément atteint le haut de l'élément avec l'ID trigger-element.
        //Commence l'animation lorsque le haut de l'élément atteint le centre de la fenêtre
        end: 'bottom center', // Termine l'animation lorsque le bas de l'élément atteint le centre de la fenêtre
        scrub: true, // "scrub" permet une animation en douceur pendant le défilement
      },
    });
  }, []); // Assurez-vous de mettre une dépendance vide pour que cela ne se déclenche qu'une fois lors du montage du composant


  useEffect(() => {
    // Utilisez setTimeout pour définir un délai avant d'afficher l'élément
    const timer = setTimeout(() => {
      setShowAboutDesc(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="about-section section">

      <h2 className="section-title about-title">ACCUEIL</h2>
      <h3 className="text" style={{textAlign: "center",width: "80%",    margin: "2vh 0"}}>BK TRAD est votre partenaire pour les traductions officielles. Nous nous engageons à garantir l'exactitude et la validité de la traduction de vos documents juridiques et administratifs.</h3>
      <div className='subsection'>


        <h3 className='div-title about-div-title'>TRADUCTIONS ASSEERMENTÉES  </h3>
        <p className='text'>Notre équipe est composée de traducteurs assermentés et dûment autorisés par les autorités compétentes à certifier des traductions officielles. Cela signifie que nos traductions sont valables et acceptées par les instances officielles.
        </p>
      </div>
      <div className='subsection'>
        <h3 className='div-title about-div-title'>LANGUES DE TRAVAIL    </h3>
        <p className='text'>Nous proposons des traductions de l’espagnol, l’anglais et l’arabe vers le français.

        </p>
        <p className='text'>Ici j’aimerais bien mettre un cadre avec les langues sources et la langues cible (peut être qu’on peut voir ensemble ce qui est faisable ?)
        </p>
      </div>
      <div className='subsection'>

        <ul className='div-title about-div-title'>Pourquoi choisir BK TRAD :
          <li className='text'><span  className='text-bold'>Certification légale </span>  <br/>Traductions certifiées et reconnues par les autorités officielles, garantissant leur authenticité.</li>

          <li className='text'><span className='text-bold'>Précision maximale  </span> <br/> Nous veillons à ce que chaque détail de votre document soit traduit avec précision pour éviter toute</li>
          <li className='text'><span className='text-bold'>Service clientèle  </span> <br/>Nous sommes à votre disposition pour répondre à toutes vos questions et préoccupations.</li>
          <li className='text'><span className='text-bold'>Prix compétitifs  </span> <br/>Nous proposons des tarifs compétitifs pour nos services.
          </li>
        </ul>
      </div>



    </div>
  );
}

export default About;
