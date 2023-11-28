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
      }, 1000);
      return () => clearTimeout(timer);
    }, []);
    return (
        <div className="about-section section">

<h2 className="section-title">ACCUEIL</h2>
<h3 className="section-subtitle">BK TRAD est votre partenaire pour les traductions officielles. Nous nous engageons à garantir l'exactitude et la validité de la traduction de vos documents juridiques et administratifs.</h3>
            <div className='subsection'>

  
<h3>TRADUCTIONS ASSEERMENTÉES : </h3>
<p>Notre équipe est composée de traducteurs assermentés et dûment autorisés par les autorités compétentes à certifier des traductions officielles. Cela signifie que nos traductions sont valables et acceptées par les instances officielles.
</p>
<h3>LANGUES DE TRAVAIL :   </h3>
<p>Nous proposons des traductions de l’espagnol, l’anglais et l’arabe vers le français.

</p>
<p>Ici j’aimerais bien mettre un cadre avec les langues sources et la langues cible (peut être qu’on peut voir ensemble ce qui est faisable ?)
</p>
<ul>Pourquoi choisir BK TRAD :
  <li>Certification légale : Traductions certifiées et reconnues par les autorités officielles, garantissant leur authenticité.</li>
 
  <li>Précision maximale : Nous veillons à ce que chaque détail de votre document soit traduit avec précision pour éviter toute</li>
  <li>Service clientèle: Nous sommes à votre disposition pour répondre à toutes vos questions et préoccupations.</li>
  <li>Prix compétitifs : Nous proposons des tarifs compétitifs pour nos services.
</li>
</ul>
           

            </div>
        </div>
    );
}

export default About;
