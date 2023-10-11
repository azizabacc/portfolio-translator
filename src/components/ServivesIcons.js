import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBalanceScale, faCoins, faPersonMilitaryToPerson, faHospital,faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { Divider } from 'semantic-ui-react';
function ServicesIcons () {
    return ( 
        <div className='services-icons'>
                    <FontAwesomeIcon className='service-icon' icon={faPersonMilitaryToPerson} style={{ width: '2rem', height: '2rem' ,color: 'white'}} />
                    <FontAwesomeIcon className='service-icon'icon={faBalanceScale} style={{ width: '2rem', height: '2rem' ,color: 'white' }} />
                    <FontAwesomeIcon className='service-icon'icon={faHospital} style={{ width: '2rem', height: '2rem' ,color: 'white' }}/>
                    <FontAwesomeIcon className='service-icon'icon={faCoins} style={{ width: '2rem', height: '2rem'  ,color: 'white'}} />
                    <FontAwesomeIcon className='service-icon'icon={faGraduationCap} style={{ width: '2rem', height: '2rem' ,color: 'white' }}/>

        </div>
     );
}

export default  ServicesIcons ;