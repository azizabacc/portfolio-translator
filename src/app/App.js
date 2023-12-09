import './App.css';
import Navbar from '../components/Navbar/Navbar';
import About from '../components/About/About';
import Services from '../components/services/Services';
import ContactForm from '../components/ContacForm/ContactForm';
import languages from '../assets/data/languages.json'
import React, { useState, useEffect, useRef } from 'react';
import { Element } from 'react-scroll';
import $ from 'jquery';
import Footer from '../components/Footer/Footer';
import ScrollButton from '../components/ScrollButton/ScrollButton';
import Procedure from '../components/Procedure/Procedure';
import SiteTile from '../components/SiteTitle/SiteTitle';
import ServicesIcons from '../components/ServicesIcons/ServivesIcons';
import SpfDocs from '../components/SpfDoc/SpfDoc';
import Services1 from '../components/Services1';
import Tarif from '../components/Tarifs/Tarifs';

function App() {
  const [language, setLanguage] = useState(languages.FR);
/*   const [loading, setLoading] = useState(true);
 */  const [showLists, setShowLists] = useState(Array(5).fill(false));
  const toggleList = (index) => {
    const newShowLists = Array(5).fill(false);
    newShowLists[index] = !showLists[index];
    setShowLists(newShowLists);
  };
  /*   useEffect(() => {
      // Simulez un délai de chargement
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);
  
      // N'oubliez pas de nettoyer le timer lorsque le composant est démonté
      return () => clearTimeout(timer);
    }, []);
   */
  const handleLanguageChange = (selectedLanguage) => {

    setLanguage(languages[selectedLanguage]);
  };

  useEffect(() => {
    $(document).on('scroll', function () {
      var pageTop = $(document).scrollTop();
      var pageBottom = pageTop + $(window).height();
      var tags = $('.tag');

      for (var i = 0; i < tags.length; i++) {
        var tag = tags[i];
        if ($(tag).position().top < pageBottom) {
          $(tag).addClass('visible');
        } else {
          $(tag).removeClass('visible');
        }
      }
    });
  }, []);



  return (
    <div className="app">

      <Navbar language={language} onLanguageChange={handleLanguageChange} />
      <SiteTile />
      <Element  className='tag' name="home">
        <About />
      </Element>
      <Element className='tag' name="services">
        <Services language={language} showLists={showLists} toggleList={toggleList} />
      </Element>
      <ScrollButton />
      <Element className='tag' name="rate">
        <Tarif />
      </Element>
      <Element className='tag' name="procedure">
        <Procedure />
      </Element>
      <Element className='tag' name="contact">
        <ContactForm language={language} id="contact" />
      </Element>
      <Element className='tag' name="SpfDocs">
        <SpfDocs />
      </Element>
      <Footer />


    </div>
  );
}

export default App;
