import '../css/spfDoc.css'

import React from 'react';
import infos1 from '../images/infos1.png';
import infos2 from '../images/infos2.png';

function SpfDocs() {
    return (
        <div className="spf-doc-section">
            <figure className="spf-doc-figures">
                <img className="info-pic-1" src={infos1} alt="SPF certified"></img>
                <img src={infos2} alt="SPF certified"></img>
            </figure>
        </div>

    );
}

export default SpfDocs;