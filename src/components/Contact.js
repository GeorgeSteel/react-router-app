import React from 'react';
import './css/Contact.css';

const Contact = () => {
    return (
        <form>
            <legend>Contact Form</legend>
            <div className="input-field">
                <input type="text" placeholder="Name"/>
            </div>
            <div className="input-field">
                <input type="email" placeholder="Email"/>
            </div>
            <div className="input-field">
                <textarea ></textarea>
            </div>
            <div className="input-field enviar">
                <input type="submit" value="Send"/>
            </div>
        </form>
    )
}

export default Contact
