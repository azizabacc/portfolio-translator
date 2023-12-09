import './spfDoc.css'


import React from 'react';
import { useState } from 'react';
import Modal from './Modal-img1';
import Modal2 from './Modal-img2';

import infos1 from '../../assets/images/infos1.png';
import infos2 from '../../assets/images/infos2.png';

function SpfDocs() {
    const [isOpen, setIsOpen] = useState(false)
    const [isOpen2, setIsOpen2] = useState(false)


    return (
        <div className="spf-doc-section section">
            <figure className="spf-doc-figures two-div-flex">
                <img onClick={() => { setIsOpen(true) }} className="info-pic-1 spf-pic" src={infos1} alt="SPF certified"></img>
                <Modal open={isOpen} onClose={() => setIsOpen(false)} ></Modal>

                <img onClick={() => { setIsOpen2(true) }} className="spf-pic" src={infos2} alt="SPF certified"></img>
                <Modal2 open={isOpen2} onClose={() => setIsOpen2(false)} ></Modal2>

            </figure>
        </div>

    );
}

export default SpfDocs;