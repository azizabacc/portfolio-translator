import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume, faAt } from '@fortawesome/free-solid-svg-icons'; // Importez l'icône du téléphone
import '../css/form.css'
const MAX_COUNT = 10;
function ContactForm({ language }) {
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [fileLimit, setFileLimit] = useState(false);
    const handleUploadFiles = files => {
        const uploaded = [...uploadedFiles];
        let limitExceeded = false;
        files.some((file) => {
            if (uploaded.findIndex((f) => f.name === file.name) === -1) {
                uploaded.push(file);
                if (uploaded.length === MAX_COUNT) setFileLimit(true);
                if (uploaded.length > MAX_COUNT) {
                    alert(`You can only add a maximum of ${MAX_COUNT} files`);
                    setFileLimit(true);
                    limitExceeded = true;
                    return true;
                }
            }

        })
        if (!limitExceeded) setUploadedFiles(uploaded)

    }
    const handleFileEvent = (e) => {
        const chosenFiles = Array.prototype.slice.call(e.target.files);
        handleUploadFiles(chosenFiles);
    }
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        fileUpload: null,
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    const handleFileUpload = (e) => {
        const files = e.target.files;
        const uploadedFiles = [];

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            uploadedFiles.push(file);
        }

        setFormData({
            ...formData,
            fileUpload: uploadedFiles,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Préparez les données à envoyer
        const name = {
            name: "John Doe", // Remplacez par le nom réel de l'utilisateur
        };
        console.log(name);

        const response = await fetch('http://localhost:3001/send-mail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(name),
        })
            .then((response) => response.json())
            .then(async (response) => {
                console.log('ok');
                console.log(response)
            });
    }
    return (
        <div className='form-section section'>

            <h2 className='section-title'>Besoin d’un devis ?<br /> Joignez votre document et recevez une estimation du prix sous 24h <br />gratuitement et sans engagement.</h2>
            <form onSubmit={handleSubmit}>
                <div className='top-form'>
                    <div >
                        <label htmlFor="name">{language.name}</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email">{language.email}</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className='email-input'
                            required
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="fileUpload" className={`${!fileLimit} ? '' : 'disabled'`}>{language.subject}</label>

                    <label htmlFor="fileUpload" className="label-file-upload">Seleccionar imagenes</label>
                    <input
                        type="file"
                        id="fileUpload"
                        name="fileUpload"
                        onChange={handleFileEvent}
                        multiple
                        style={{ display: 'none' }}
                        disabled={fileLimit}
                    />
                    <div className='uploaded-files-list'>
                        {uploadedFiles.map(file => (
                            <div>
                                {file.name}
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <label htmlFor="message">{language.message}</label>
                    <textarea
                        className='message-input'
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" onClick={handleSubmit}>{language.submitButton}</button>
            </form>
            <div className='contact-infos'>
                <FontAwesomeIcon icon={faAt} style={{ color: "#ffffff", }} />
                <p>
                    <a href="mailto:kenza.baccouri@gmail.com"><span className='email-link'>kenza.baccouri@gmail.com</span></a></p>
                <FontAwesomeIcon icon={faPhoneVolume} style={{ color: "#ffffff", }} />
                <p>
                    <a href="tel:+34613863599" className='email-link'>+34 613 863 599</a></p>
            </div>
        </div>
    );
}

export default ContactForm;
