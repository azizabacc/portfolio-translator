import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBalanceScale, faCoins, faPersonMilitaryToPerson, faHospital, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { Divider } from 'semantic-ui-react';
import { Link } from 'react-scroll';
function ServicesIcons() {
    return (
        <div className='services-icons'>
            <Link to='doc-civil' spy={true} smooth={true} duration={500}>
                <FontAwesomeIcon className='service-icon' icon={faPersonMilitaryToPerson} style={{ width: '2rem', height: '2rem', color: 'black' }} />
            </Link>
            <Link to='doc-legal' spy={true} smooth={true} duration={500}>
                <FontAwesomeIcon className='service-icon' icon={faBalanceScale} style={{ width: '2rem', height: '2rem', color: 'black' }} />
            </Link>
            <Link to='doc-medical' spy={true} smooth={true} duration={500}>
                <FontAwesomeIcon className='service-icon' icon={faHospital} style={{ width: '2rem', height: '2rem', color: 'black' }} />
            </Link>
            <Link to='doc-financial' spy={true} smooth={true} duration={500}>
                <FontAwesomeIcon className='service-icon' icon={faCoins} style={{ width: '2rem', height: '2rem', color: 'black' }} />
            </Link>
            <Link to='doc-educative' spy={true} smooth={true} duration={500}>
                <FontAwesomeIcon className='service-icon' icon={faGraduationCap} style={{ width: '2rem', height: '2rem', color: 'black' }} />
            </Link>

        </div>
    );
}

export default ServicesIcons;