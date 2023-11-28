

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBalanceScale, faCoins, faPersonMilitaryToPerson, faHospital, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
/* import '../css/services.css'; */
import Modal from './Modal';

function Services1() {
    // État local pour gérer la visibilité de chaque liste
    const [isOpen, setIsOpen] = useState(false)
    // Fonction pour basculer la visibilité de la liste au clic sur le titre

    const handleOpen = () =>{
         if (isOpen) {
            setIsOpen(true)
         } else {
            setIsOpen(false)
         }
    }
    return (
        <div className='services-container'>
            <div className='services-section'>
                <h2 className='section-subtitle'>SERVICES</h2>
                <h3 className='section-subsubtitle'>
                    TRADUCTIONS VALABLES TTE BELGIQUE E-LEGALISATION
                </h3>
                <div className='services-desc' >
                 
                    <div className='doc-category doc-civil' name='doc-civil'       >
                        <FontAwesomeIcon icon={faPersonMilitaryToPerson} />
                        <h3
                            className='service-title'
                            onClick={handleOpen}
                        >
                            Documents d'État Civil
                        </h3>
                        <Modal open={isOpen} >
                        <ul >
                            <li className='doc-title'>Acte de naissance</li>
                            <li className='doc-title'>Certificats de mariage</li>
                            <li className='doc-title'>Certificats de décès</li>
                            <li className='doc-title'>
                                Certificat de non-empêchement et Nulla Ostas
                            </li>
                        </ul>
                        </Modal>
          
                    </div>
                    <div className='doc-category'   name='doc-legal' >
                        <FontAwesomeIcon icon={faBalanceScale} />

                        <h3
                            className='service-title'
                            onClick={() => (isOpen ? setIsOpen(true) : setIsOpen(false))}
                        >
                            Documents Légaux
                        </h3>
                        <Modal>
                        <ul >
                            <li className='doc-title'>Casier judiciaire</li>
                            <li className='doc-title'>Contrats</li>
                            <li className='doc-title'>Permis de conduire</li>
                            <li className='doc-title'>Déclarations IMTI</li>
                            <li className='doc-title'>Peines de divorce</li>
                        </ul>
                        </Modal>
         
                    </div>
                   
                    <div className='doc-category'  name='doc-medical'  >
                        <FontAwesomeIcon icon={faHospital} />
                        <h3  onClick={() => (isOpen ? setIsOpen(true) : setIsOpen(false))}
                            className='service-title'

                        >
                            Documents Médicaux
                        </h3>
                        <Modal>
                        <ul>
                            <li className='doc-title'>Rapports et documents médicaux</li>
                        </ul>
                        </Modal>
                  
                    </div>
                    <div className='doc-category'  name='doc-financial'>
                        <FontAwesomeIcon icon={faCoins} />
                        <h3 className='service-title'  onClick={() => (isOpen ? setIsOpen(true) : setIsOpen(false))}>Documents Financiers </h3>
                        <Modal>
                        <ul >
                            <li className='doc-title'>Informations financières</li>
                            <li className='doc-title'>Factures</li>
                        </ul>
                        </Modal>
                  
                    </div>
                    <div className='doc-category'  name='doc-educative' >
                        <FontAwesomeIcon icon={faGraduationCap} />
                        <h3 className='service-title'>Documents Éducatifs  onClick={() => (isOpen ? setIsOpen(true) : setIsOpen(false))} </h3>
                        <Modal>
                        <ul >
                            <li className='doc-title'>Document académique</li>
                        </ul>
                        </Modal>
                      
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services1;