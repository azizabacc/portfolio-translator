import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import ContactForm from './components/ContactForm';
import languages from './data/languages.json'
import React, { useState, useEffect, useRef } from 'react';
import { Element } from 'react-scroll';
import $ from 'jquery';
import Footer from './components/Footer';
import ScrollButton from './components/ScrollButton';
import Procedure from './components/Procedure';
import SiteTile from './components/SiteTitle';
import ServicesIcons from './components/ServivesIcons';
function App() {
  const [language, setLanguage] = useState(languages.en);
  const canvasRef = useRef(null); // Définissez canvasRef avec useRef

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
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
      <ServicesIcons />
      <Element  name='home'><About /></Element>
      <Element className='tag' name='services'><Services /></Element>
      <ScrollButton />
      <Element className='tag' name='procedure'>  <Procedure /></Element>


      <Element className='tag' name='contact'><ContactForm language={language} id="contact" /></Element>
      <Footer />
    </div>
  );
}

export default App;
