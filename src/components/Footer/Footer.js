import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './footer.css';
import { useState } from 'react';
import Modal from './Modal';
const linkedinUrl = "https://www.linkedin.com/in/kenza-baccouri/"
const externalLinkUrl = "https://justsearch.just.fgov.be/national-registry-search/translator/result/detail"
function Footer() {
  const [isOpen, setIsOpen] = useState(false)

  const goToLink = (url) => {
    console.log('helloo')
    window.open(url, "_blank");
  };
  return (
    <footer>
      <div className="social-links">
        <FontAwesomeIcon className='faLinkedin' icon={faLinkedin} style={{ width: '2rem', height: '2rem' }} onClick={() => goToLink(linkedinUrl)} />
        <div
          className='spfIcon'
          onClick={() => goToLink(externalLinkUrl)}
        >

        </div>
      </div>
      <button onClick={() => { setIsOpen(true) }} >RBPD - Conditions générales de vente</button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)} ></Modal>
    </footer>
  );
}

export default Footer;