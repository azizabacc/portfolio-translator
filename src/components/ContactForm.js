import React, { useState } from 'react';
import '../css/form.css'
const MAX_COUNT = 2;
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
        const files = e.target.files; // Obtenez la liste des fichiers sélectionnés
        const uploadedFiles = [];

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            uploadedFiles.push(file);
        }

        // Stockez les fichiers dans l'état ou effectuez toute autre opération nécessaire
        setFormData({
            ...formData,
            fileUpload: uploadedFiles, // Stockez les fichiers dans un tableau
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Vous pouvez ajouter ici la logique pour envoyer le formulaire (par exemple, via une API).
        // formData contient maintenant les valeurs soumises.
        console.log(formData);
    };

    return (
        <div className='form-section'>

            <h2 className=''>Besoin d’un devis ? Joignez votre document et recevez une estimation du prix sous 24h gratuitement et sans engagement.</h2>
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
                    <div className='uploaded-files-list'>
                        {uploadedFiles.map(file => (
                            <div>
                                {file.name}
                            </div>
                        ))}
                    </div>
                    <input
                        type="file"
                        id="fileUpload"
                        name="fileUpload"
                        onChange={handleFileEvent}
                        multiple
                        disabled={fileLimit} />

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
                <button type="submit">{language.submitButton}</button>
            </form>
            <div className='contact-infos'>
                <p> MAIL:{" "}
                    <a href="mailto:kenza.baccouri@gmail.com"><span className='email-link'>kenza.baccouri@gmail.com</span></a></p>
                <p>    TEL:{" "}
                    <a href="tel:+34613863599">+34 613 863 599</a></p>
            </div>
        </div>
    );
}

export default ContactForm;
