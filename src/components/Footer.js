import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../css/footer.css';

function Footer() {
    return (
        <footer>
          <div className="social-links">
          <FontAwesomeIcon icon={faLinkedin} style={{ width: '2rem', height: '2rem' }}/>            
          </div>
        </footer>
      );
    }

export default Footer;