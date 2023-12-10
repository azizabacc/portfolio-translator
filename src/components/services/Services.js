import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBalanceScale, faCoins, faPersonMilitaryToPerson, faHospital, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import './services.css';
import List from './List';

function Services({ showLists, toggleList, language }) {
    const [listItems, setListItems] = useState([]);

    useEffect(() => {
        // Créez un tableau contenant toutes les listes de documents
        const allLists = [
            language.servicesSection.docs.civil,
            language.servicesSection.docs.legal,
            language.servicesSection.docs.medical,
            language.servicesSection.docs.financial,
            language.servicesSection.docs.educative,
        ];

        // Remplissez listItems avec toutes les listes de documents
        const filledListItems = allLists.map((list) => {
            const array = [];
            for (let index in list) {
                array.push(list[index]);
            }
            return array;
        });

        setListItems(filledListItems);
    }, [language.servicesSection.docs]);

    return (
        <div className='services-section section'>
            <div className='subsection'>
                <h2 className='section-title'>{language.servicesSection.titles.title}</h2>

                <div className='services-desc' >
                    {listItems.map((items, index) => (
                        <div className='doc-category div-title' name={"doc-" + index} key={index} onClick={() => toggleList(index)}>
                            {renderIconForIndex(index)}
                            <h3 className='section-subtitle'>{renderTitleForIndex(index)}</h3>
                            <List showLists={showLists} toggleList={toggleList} items={items} number={index} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    function renderIconForIndex(index) {
        switch (index) {
            case 0:
                return <FontAwesomeIcon icon={faPersonMilitaryToPerson} />;
            case 1:
                return <FontAwesomeIcon icon={faBalanceScale} />;
            case 2:
                return <FontAwesomeIcon icon={faHospital} />;
            case 3:
                return <FontAwesomeIcon icon={faCoins} />;
            case 4:
                return <FontAwesomeIcon icon={faGraduationCap} />;
            default:
                return null;
        }
    }

    function renderTitleForIndex(index) {
        switch (index) {
            case 0:
                return 'Documents d\'État Civil';
            case 1:
                return 'Documents Légaux';
            case 2:
                return 'Documents Médicaux';
            case 3:
                return 'Documents Financiers';
            case 4:
                return 'Documents Éducatifs';
            default:
                return '';
        }
    }
}

export default Services;
