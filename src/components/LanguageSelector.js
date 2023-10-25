import React, { useState } from 'react';
import US from 'country-flag-icons/react/3x2/US';
import ES from 'country-flag-icons/react/3x2/ES';
import FR from 'country-flag-icons/react/3x2/FR';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import '../css/Languages.css';

function LanguagesSelector({ onLanguageChange }) {
  const [showLanguages, setShowLanguages] = useState(false);
  const [currentLang, setCurrentLang] = useState('FR');

  const toggleLanguages = () => {
    setShowLanguages(!showLanguages);
  };

  const handleLanguageChange = (lang) => {
    setCurrentLang(lang); // Mettez à jour la langue actuelle lorsque vous changez de langue
    onLanguageChange(lang);
  };

  return (
    <div className="select-container">
      <div className='language-div current-language-div' onClick={() => toggleLanguages()}>
        <p>{currentLang}</p>
        <FontAwesomeIcon icon={faArrowDown} />
      </div>
      {showLanguages && (
        <div className='scroll-language'>
          <div className='language-div' onClick={() => handleLanguageChange("FR")} value="FR">
            <p className='lang-iso'>FR</p><FR className="flag-icon" />
          </div>
          <div className='language-div' onClick={() => handleLanguageChange("EN")} value="EN">
            <p className='lang-iso'>EN</p><US className="flag-icon" />
          </div>
          <div className='language-div' onClick={() => handleLanguageChange("ES")} value="ES">
            <p className='lang-iso'>ES</p><ES className="flag-icon" />
          </div>
        </div>
      )}
    </div>
  );
}

export default LanguagesSelector;
