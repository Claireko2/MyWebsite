import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    const styles = {
        footer: {
            backgroundColor: "#111827",
            color: "white",
            padding: "40px 24px 20px",
            textAlign: "center",
        },
        footerContent: {
            maxWidth: "1200px",
            margin: "0 auto",
        },
        footerGrid: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "32px",
            marginBottom: "32px",
        },
        footerSection: {
            textAlign: "left",
        },
        footerTitle: {
            fontSize: "1.125rem",
            fontWeight: "600",
            marginBottom: "16px",
            color: "white",
        },
        footerLink: {
            color: "#9ca3af",
            textDecoration: "none",
            fontSize: "14px",
            lineHeight: "1.8",
            transition: "color 0.3s ease",
        },
        footerBottom: {
            borderTop: "1px solid #374151",
            paddingTop: "20px",
            color: "#9ca3af",
            fontSize: "14px",
        },
        socialLinks: {
            display: "flex",
            justifyContent: "center",
            gap: "16px",
            marginTop: "16px",
        },
        socialLink: {
            color: "#9ca3af",
            fontSize: "20px",
            textDecoration: "none",
            transition: "color 0.3s ease",

        },
    };

    return (
        <footer style={styles.footer}>
            <div style={styles.footerContent}>
                <div style={styles.footerGrid}>
                    {/* About */}
                    <div style={styles.footerSection}>
                        <h4 style={styles.footerTitle}>Claire</h4>
                        <p style={{ ...styles.footerLink, cursor: "default" }}>
                            Passionate about creating
                            meaningful digital experiences and turning data into actionable
                            insights.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div style={{ ...styles.footerSection, marginLeft: "100px" }}>
                        <h4 style={styles.footerTitle}>Quick Links</h4>
                        <div
                            style={{ display: "flex", flexDirection: "column", gap: "8px" }}
                        >
                            <Link to="/" style={styles.footerLink}>Home</Link>
                            <Link to="/projects" style={styles.footerLink}>Projects</Link>
                            <Link to="/contact" style={styles.footerLink}>Contact</Link>
                        </div>
                    </div>

                    {/* Services */}
                    <div style={{ ...styles.footerSection, marginLeft: "35px" }}>
                        <h4 style={styles.footerTitle}>Services</h4>
                        <div
                            style={{ display: "flex", flexDirection: "column", gap: "8px" }}
                        >
                            <span style={styles.footerLink}>Data Analysis</span>
                            <span style={styles.footerLink}>Web Development</span>
                            <span style={styles.footerLink}>Machine Learning</span>
                            <span style={styles.footerLink}>Data Visualization</span>
                        </div>
                    </div>

                    {/* Socials */}
                    <div style={styles.footerSection}>
                        <h4 style={styles.footerTitle}>Connect</h4>
                        <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}
                        >
                            <a href="mailto:lko16@my.bcit.ca" style={styles.socialLink}>
                                <i className="fas fa-envelope"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/claireko9/" target="_blank" rel="noreferrer" style={styles.socialLink}>
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/Claireko2" target="_blank" rel="noreferrer" style={styles.socialLink}>
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div style={styles.footerBottom}>
                    <p>
                        &copy; {new Date().getFullYear()} Claire. All rights reserved. Built
                        with React and passion for great design.
                    </p>
                </div>
            </div>
        </footer >
    );
}
