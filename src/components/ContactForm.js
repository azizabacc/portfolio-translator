import React, { useState } from 'react';
import '../css/form.css'
function ContactForm({language}) {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
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
 
            <h2 className=''>Have a question, an idea, or a project you'd like to discuss? Feel free to reach out!</h2>
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
                <label htmlFor="subject">{language.subject}</label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                />
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
        </div>
    );
}

export default ContactForm;
