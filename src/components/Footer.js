import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../css/footer.css';
import { useState } from 'react';

function Footer() {
  const [linkedinUrl, setLinkedinUrl] = useState("https://www.linkedin.com/in/kenza-baccouri-7b05b0109/");
  const [externalLinkUrl, setExternalLinkUrl] = useState("https://www.example.com"); 

  const goToLink = (url) => {
    window.open(url, "_blank");
  };
    return (
        <footer>
          <div className="social-links">
          <FontAwesomeIcon className='faLinkedin' icon={faLinkedin} style={{ width: '2rem', height: '2rem' }} onClick={goToLink(linkedinUrl)}/>            
          <div
          className='spfIcon'
          onClick={() => goToLink(externalLinkUrl)}
       >
        
          </div>
          </div>
        </footer>
      );
    }

export default Footer;