import React from 'react'
import ReactDom from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import infos2 from '../../assets/images/infos2.png';
const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    width: '100%',
    zIndex: 1000
}

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
}

export default function Modal2({ open, onClose }) {

    if (!open) return null

    return ReactDom.createPortal(
        <>
            <div style={OVERLAY_STYLES}>
                <FontAwesomeIcon className='faXmark' icon={faXmark} onClick={onClose} />

                <img style={MODAL_STYLES} className='modal-img' src={infos2} alt="SPF certified"></img>

            </div> </>,
        document.getElementById('portal')
    )
}