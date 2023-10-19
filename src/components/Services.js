

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBalanceScale, faCoins, faPersonMilitaryToPerson, faHospital, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import '../css/services.css';

function Services() {
    // État local pour gérer la visibilité de chaque liste
    const [showLists, setShowLists] = useState(Array(5).fill(false));

    // Fonction pour basculer la visibilité de la liste au clic sur le titre
    const toggleList = (index) => {
        const newShowLists = Array(5).fill(false);
        newShowLists[index] = !showLists[index]; 
        setShowLists(newShowLists);
    };

    return (
        <div className='services-container'>
            <div className='services-section'>
                <h2 className='section-subtitle'>SERVICES</h2>
                <h3 className='section-subsubtitle'>
                    TRADUCTIONS VALABLES TTE BELGIQUE E-LEGALISATION
                </h3>
                <div className='services-desc' >
                 
                    <div className='doc-category' name='doc-civil' onClick={() => toggleList(0)} >
                        <FontAwesomeIcon icon={faPersonMilitaryToPerson} />
                        <h3
                            className='service-title'

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
                    <div className='doc-category'   name='doc-legal' onClick={() => toggleList(1)}>
                        <FontAwesomeIcon icon={faBalanceScale} />

                        <h3
                            className='service-title'
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
                   
                    <div className='doc-category'  name='doc-medical'  onClick={() => toggleList(2)} >
                        <FontAwesomeIcon icon={faHospital} />
                        <h3
                            className='service-title'

                        >
                            Documents Médicaux
                        </h3>
                        <ul className={showLists[2] ? 'visible-list' : 'hidden-list'}>
                            <li className='doc-title'>Rapports et documents médicaux</li>
                        </ul>
                    </div>
                    <div className='doc-category'  name='doc-financial'onClick={() => toggleList(3)}>
                        <FontAwesomeIcon icon={faCoins} />
                        <h3 className='service-title'>Documents Financiers </h3>
                        <ul className={showLists[3] ? 'visible-list' : 'hidden-list'}>
                            <li className='doc-title'>Informations financières</li>
                            <li className='doc-title'>Factures</li>
                        </ul>
                    </div>
                    <div className='doc-category'  name='doc-educative' onClick={() => toggleList(4)}>
                        <FontAwesomeIcon icon={faGraduationCap} />
                        <h3 className='service-title'>Documents Éducatifs </h3>
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