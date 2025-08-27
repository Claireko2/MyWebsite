// LeaveMessage.jsx
import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export default function LeaveMessage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        subject: "",
        budget: "",
        message: "",
        timeline: "",
    });

    const [charCount, setCharCount] = useState(0);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "message") {
            setCharCount(value.length);
        }
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccessMessage("");
        setErrorMessage("");

        // Validation
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.subject || !formData.message) {
            setErrorMessage("❌ Please fill in all required fields.");
            return;
        }

        try {
            setIsSubmitting(true);
            await addDoc(collection(db, "messages"), {
                ...formData,
                name: `${formData.firstName} ${formData.lastName}`,
                createdAt: Timestamp.now(),
                status: "unread",
            });

            setSuccessMessage("✅ Thank you! Your message has been sent successfully. I'll get back to you within 24 hours.");
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                company: "",
                subject: "",
                budget: "",
                message: "",
                timeline: "",
            });
            setCharCount(0);
        } catch (error) {
            console.error("Error sending message:", error);
            setErrorMessage("❌ Failed to send message. Please try again or contact me directly.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="container">
            <div class="contact-header">
                <h1 class="page-title">Let's Connect</h1>
                <p class="page-subtitle">I'd love to hear from you! Whether you have a project in mind, want to collaborate, or just want to say hello.</p>

            </div>

            <div className="content-grid">
                {/* FORM SECTION */}
                <div className="contact-form-section">
                    <h2 className="section-title">
                        <span className="section-icon"></span> Send Me a Message
                    </h2>

                    {successMessage && <div className="success-message">{successMessage}</div>}
                    {errorMessage && <div className="error-message">{errorMessage}</div>}

                    <form onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label" htmlFor="firstName">First Name *</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    className="form-input"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="lastName">Last Name *</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    className="form-input"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label" htmlFor="email">Email Address *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-input"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label" htmlFor="company">Company/Organization</label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                className="form-input"
                                value={formData.company}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label" htmlFor="subject">Subject *</label>
                            <select
                                id="subject"
                                name="subject"
                                className="form-select"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Please select a subject</option>
                                <option value="project-inquiry">Project Inquiry</option>
                                <option value="job-opportunity">Job Opportunity</option>
                                <option value="collaboration">Collaboration</option>
                                <option value="consultation">Consultation</option>
                                <option value="speaking">Speaking Engagement</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label className="form-label" htmlFor="message">Message *</label>
                            <textarea
                                id="message"
                                name="message"
                                className="form-textarea"
                                placeholder="Tell me about your project, timeline, requirements..."
                                value={formData.message}
                                onChange={handleChange}
                                maxLength={1000}
                                required
                            ></textarea>
                            <div
                                className="char-counter"
                                style={{ color: charCount > 900 ? "#e53e3e" : "#666" }}
                            >
                                {charCount}/1000 characters
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label" htmlFor="timeline">Preferred Timeline</label>
                            <select
                                id="timeline"
                                name="timeline"
                                className="form-select"
                                value={formData.timeline}
                                onChange={handleChange}
                            >
                                <option value="">Select timeline</option>
                                <option value="asap">ASAP</option>
                                <option value="1-month">Within 1 month</option>
                                <option value="2-3-months">2-3 months</option>
                                <option value="6-months">Within 6 months</option>
                                <option value="flexible">Flexible</option>
                            </select>
                        </div>

                        <button type="submit" className="submit-btn" disabled={isSubmitting}>
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </div>

                {/* CONTACT INFO */}
                <div className="contact-info-section">
                    <h2 className="section-title flex items-center gap-2">
                        <i className="fas fa-address-card"></i> Get in Touch
                    </h2>

                    <div className="info-item flex items-center gap-2">
                        <i className="fas fa-envelope"></i> <strong>Email:</strong> lko16@my.bcit.ca
                    </div>

                    <div className="info-item flex items-center gap-2">
                        <i className="fas fa-phone"></i> <strong>Phone:</strong> (236) 992-5696
                    </div>

                    <div className="info-item flex items-center gap-2">
                        <i className="fab fa-linkedin"></i> <strong>LinkedIn:</strong>{" "}
                        <a
                            href="https://www.linkedin.com/in/claireko9/"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:underline"
                        >
                            linkedin.com/in/claireko9
                        </a>
                    </div>

                    <div className="info-item flex items-center gap-2">
                        <i className="fab fa-github"></i> <strong>GitHub:</strong>{" "}
                        <a
                            href="https://github.com/Claireko2"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:underline"
                        >
                            github.com/Claireko2
                        </a>
                    </div>

                    <div className="info-item flex items-center gap-2">
                        <i className="fas fa-map-marker-alt"></i> <strong>Location:</strong> Vancouver, B.C.
                    </div>

                </div>

            </div>
        </div>
    );
}
