// ContactInfo.js
import React from "react";


export default function ContactInfo() {
    return (
        <div className="contact-container">
            {/* LEFT */}
            <div className="contact-left">
                <div className="contact-header">
                    <h1 className="page-title">Let's Connect</h1>
                    <p className="page-subtitle">
                        I'd love to hear from you! Whether you have a project in mind, want to collaborate, or just want to say hello.
                    </p>
                </div>

                <div className="contact-info-section">
                    <h2 className="section-title">
                        <i className="fas fa-address-card"></i> Get in Touch
                    </h2>

                    <div className="info-item">
                        <i className="fas fa-envelope"></i>
                        <strong>Email:</strong> lko16@my.bcit.ca
                    </div>

                    <div className="info-item">
                        <i className="fas fa-phone"></i>
                        <strong>Phone:</strong> (236) 992-5696
                    </div>

                    <div className="info-item">
                        <i className="fab fa-linkedin"></i>
                        <strong>LinkedIn:</strong>{" "}
                        <a href="https://www.linkedin.com/in/claireko9/" target="_blank" rel="noreferrer">
                            linkedin.com/in/claireko9
                        </a>
                    </div>

                    <div className="info-item">
                        <i className="fab fa-github"></i>
                        <strong>GitHub:</strong>{" "}
                        <a href="https://github.com/Claireko2" target="_blank" rel="noreferrer">
                            github.com/Claireko2
                        </a>
                    </div>

                    <div className="info-item">
                        <i className="fas fa-map-marker-alt"></i>
                        <strong>Location:</strong> Vancouver, B.C.
                    </div>
                </div>
            </div>

            {/* RIGHT */}
            <div className="contact-right">
                <img
                    src="./files/contact.jpeg"
                    alt="Contact illustration "
                />
            </div>
        </div>
    );
}

