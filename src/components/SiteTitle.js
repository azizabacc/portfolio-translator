import '../css/siteTitle.css';
import US from 'country-flag-icons/react/3x2/US';
import ES from 'country-flag-icons/react/3x2/ES';
import FR from 'country-flag-icons/react/3x2/FR';
import { CircleFlag } from 'react-circle-flags'
function SiteTile() {
    const bracket = '}';
    return (
        <div className="site-tile-section">
{/*             <div className='site-lang-container'>
                <div className='second-lang'>
                    <div className='site-lang-div'>

                        <h2>ESPAGNOL</h2>

                        <CircleFlag className="cercle-flag" countryCode="es" height="35" />
                    </div>
                    <div className='site-lang-div'>
                        <h2>ANGLAIS</h2>
                        <CircleFlag className="cercle-flag" countryCode="us" height="35" />
                    </div>
                    <div className='site-lang-div'>
                        <h2>ARABE</h2>
                        <div className="cercle-flag arabic" >عربية</div>

                    </div>
                </div>
                <p>{bracket}</p>

                <div className='site-lang-div-french'>
                    <h2>FRANCAIS</h2>
                    <CircleFlag className="cercle-flag" countryCode="fr" height="35" />
                </div>



            </div> */}
            <div className='site-image'></div>

        </div>
    );
}

export default SiteTile;