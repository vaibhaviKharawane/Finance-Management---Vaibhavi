import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-content">
                <h1 className="contact-title">Contact Us</h1>
                <p className="contact-subtitle">Get in touch with us for any inquiries or support.</p>

                <div className="contact-links">
                    <a href="https://www.linkedin.com/in/vaibhavi-kharawane-469ba6259" target="_blank" rel="noopener noreferrer" className="contact-link">
                        <img src="https://logospng.org/download/linkedin/logo-linkedin-icon-4096.png" alt="LinkedIn" className="contact-icon" />
                        <span>LinkedIn</span>
                    </a>
                    <a href="https://github.com/VaibhaviKharawane" target="_blank" rel="noopener noreferrer" className="contact-link">
                        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" className="contact-icon" />
                        <span>GitHub</span>
                    </a>
                    <a href="https://www.youtube.com/watch?v=your_finance_video_id" target="_blank" rel="noopener noreferrer" className="contact-link">
                        <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="Finance Video" className="contact-icon" />
                        <span>Finance Management Video</span>
                    </a>
                </div>

                <div className="trust-section">
                    <h2>Trust Us</h2>
                    <p>We are dedicated to providing secure and reliable financial management tools.</p>
                    <div className="trust-links">
                        <a href="https://www.linkedin.com/in/vaibhavi-kharawane-469ba6259" target="_blank" rel="noopener noreferrer">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
