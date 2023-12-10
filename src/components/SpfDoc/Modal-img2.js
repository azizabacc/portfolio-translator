import React from 'react'
import ReactDom from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import infos2 from '../../assets/images/infos2.png';

export default function Modal2({ open, onClose }) {

    if (!open) return null

    return ReactDom.createPortal(
        <>
            <div className='modal modal2'>
                <FontAwesomeIcon className='faXmark' icon={faXmark} onClick={onClose} />

                <img className='modal-img2' src={infos2} alt="SPF certified"></img>

            </div> </>,
        document.getElementById('portal')
    )
}