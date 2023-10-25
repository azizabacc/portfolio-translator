import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBalanceScale, faCoins, faPersonMilitaryToPerson, faHospital, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

function ServicesIcons({ toggleList }) {

    return (
        <div className='services-icons' >
            <Link to='doc-0' activeClass="active" spy={true} smooth={true} duration={500} >
                <FontAwesomeIcon  onClick={() => toggleList(0)}  className='service-icon' icon={faPersonMilitaryToPerson}  />
            </Link>
            <Link to='doc-1' spy={true} smooth={true} duration={500}>
                <FontAwesomeIcon  onClick={() => toggleList(1)} className='service-icon' icon={faBalanceScale} />
            </Link>
            <Link to='doc-2' spy={true} smooth={true} duration={500}>
                <FontAwesomeIcon  onClick={() => toggleList(2)} className='service-icon' icon={faHospital}  />
            </Link>
            <Link to='doc-3' spy={true} smooth={true} duration={500}>
                <FontAwesomeIcon  onClick={() => toggleList(3)} className='service-icon' icon={faCoins}/>
            </Link>
            <Link to='doc-4' spy={true} smooth={true} duration={500}>
                <FontAwesomeIcon  onClick={() => toggleList(4)} className='service-icon' icon={faGraduationCap}  />
            </Link>

        </div>
    );
}

export default ServicesIcons;