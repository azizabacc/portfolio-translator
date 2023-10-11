import React, { useState } from 'react';
import '../css/Languages.css'; 


function LanguagesSelector({language, onLanguageChange }) {
 

  return (
    <div className="select-container">
      <select  onChange={onLanguageChange} >
        <option value="en">en</option>
        <option value="fr">fr</option>
        <option value="es">es</option>
      </select>
    </div>
  );
}

export default LanguagesSelector;