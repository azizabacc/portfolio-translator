

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBalanceScale, faCoins, faPersonMilitaryToPerson, faHospital,faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import '../css/services.css';

function Services() {
    // État local pour gérer la visibilité de chaque liste
    const [showLists, setShowLists] = useState(Array(5).fill(false));

    // Fonction pour basculer la visibilité de la liste au clic sur le titre
    const toggleList = (index) => {
        const newShowLists = Array(5).fill(false); // Réinitialiser toutes les listes à false
        newShowLists[index] = !showLists[index]; // Basculer la visibilité de la liste actuelle
        setShowLists(newShowLists);
    };

    return (
        <div className='services-container'>
            <div className='services-section'>
                <h2 className='section-subtitle'>SERVICES</h2>
                <h3 className='section-subsubtitle'>
                    TRADUCTIONS VALABLES TTE BELGIQUE E-LEGALISATION
                </h3>
                <div className='services-desc'>
                    {/* Exemple d'un service */}
                    <div className='doc-category'>
                    <FontAwesomeIcon icon={faPersonMilitaryToPerson} />
                        <h3
                            className='service-title'
                            onClick={() => toggleList(0)} // Appel de la fonction pour basculer la visibilité
                        >
                            Documents d'État Civil
                        </h3>
                        <ul className={showLists[0] ? 'visible-list' : 'hidden-list'}>
                            <li className='doc-title'>Acte de naissance</li>
                            <li className='doc-title'>Certificats de mariage</li>
                            <li className='doc-title'>Certificats de décès</li>
                            <li className='doc-title'>
                                Certificat de non-empêchement et Nulla Ostas
                            </li>
                        </ul>
                    </div>
                    <div className='doc-category'>
                    <FontAwesomeIcon icon={faBalanceScale} />

                        <h3
                            className='service-title'
                            onClick={() => toggleList(1)} // Appel de la fonction pour basculer la visibilité
                        >
                            Documents Légaux
                        </h3>
                        <ul className={showLists[1] ? 'visible-list' : 'hidden-list'}>
                            <li className='doc-title'>Casier judiciaire</li>
                            <li className='doc-title'>Contrats</li>
                            <li className='doc-title'>Permis de conduire</li>
                            <li className='doc-title'>Déclarations IMTI</li>
                            <li className='doc-title'>Peines de divorce</li>
                        </ul>
                    </div>
                    {/* Exemple d'un autre service */}
                    <div className='doc-category'>
                    <FontAwesomeIcon icon={faHospital} />
                        <h3
                            className='service-title'
                            onClick={() => toggleList(2)} // Appel de la fonction pour basculer la visibilité
                        >
                            Documents Médicaux
                        </h3>
                        <ul className={showLists[2] ? 'visible-list' : 'hidden-list'}>
                            <li className='doc-title'>Rapports et documents médicaux</li>
                        </ul>
                    </div>
                    <div className='doc-category'>
                        <FontAwesomeIcon icon={faCoins} />
                        <h3 className='service-title' onClick={() => toggleList(3)}>Documents Financiers </h3>
                        <ul className={showLists[3] ? 'visible-list' : 'hidden-list'}>
                            <li className='doc-title'>Informations financières</li>
                            <li className='doc-title'>Factures</li>
                        </ul>
                    </div>
                    <div className='doc-category'>
                    <FontAwesomeIcon icon={faGraduationCap} />
                        <h3 className='service-title' onClick={() => toggleList(4)}>Documents Éducatifs </h3>
                        <ul className={showLists[4] ? 'visible-list' : 'hidden-list'}>
                            <li className='doc-title'>Document académique</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;