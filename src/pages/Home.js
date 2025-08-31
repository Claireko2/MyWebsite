import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    const styles = {
        // Container Styles
        homeContainer: {
            minHeight: '100vh',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
        },

        // Section 1: Hero Banner
        heroSection: {
            position: 'relative',
            height: '60vh',
            background: 'url("./files/IMG_1.jpeg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'rgba(32, 35, 23, 1)',
            textAlign: 'center'
        },
        heroContent: {
            maxWidth: '800px',
            padding: '0 24px'
        },
        heroTitle: {
            fontSize: '4rem',
            fontWeight: 'bold',
            marginBottom: '24px',
            lineHeight: '1.1',
            textShadow: '2px 2px 4px rgba(242, 227, 227, 0.8)'
        },
        gradientText: {

            color: 'rgba(237, 18, 18, 1)'
        },
        heroSubtitle: {
            fontSize: '1.5rem',
            marginBottom: '32px',
            lineHeight: '1.7',
            textShadow: '1px 2px 2px rgba(150, 147, 147, 0.8)'
        },
        ctaButtons: {
            display: 'flex',
            flexDirection: 'row',
            gap: '16px',
            justifyContent: 'center',
            alignItems: 'center'
        },
        primaryBtn: {
            background: 'rgba(250, 185, 55, 1)',
            color: 'white',
            padding: '16px 32px',
            borderRadius: '8px',
            fontWeight: '600',
            border: 'none',
            cursor: 'pointer',
            fontSize: '16px',
            transition: 'all 0.3s ease',
            textDecoration: 'none',
            display: 'inline-block',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
        },
        secondaryBtn: {
            backgroundColor: 'rgba(247, 64, 64, 0.91)',
            color: 'white',
            padding: '16px 32px',
            borderRadius: '8px',
            fontWeight: '600',
            border: '2px solid rgba(255,255,255,0.3)',
            cursor: 'pointer',
            fontSize: '16px',
            transition: 'all 0.3s ease',
            textDecoration: 'none',
            display: 'inline-block',
            backdropFilter: 'blur(10px)'
        },

        // Section 2: About Section
        aboutSection: {
            background: 'linear-gradient(180deg, #fcf1f5ff 100%, #c5c6c7ff 0%)',
            padding: '80px 24px'
        },
        wrapper: {
            maxWidth: '1200px',
            margin: '0 auto'
        },
        aboutCard: {
            backgroundColor: 'white',
            borderRadius: '16px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            padding: '48px'
        },
        aboutGrid: {
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: '48px',
            alignItems: 'center'
        },
        aboutTitle: {
            fontSize: '2.25rem',
            fontWeight: 'bold',
            color: '#111827',
            marginBottom: '24px'
        },
        aboutText: {
            color: '#4b5563',
            lineHeight: '1.7',
            marginBottom: '24px'
        },
        skillsSection: {
            marginTop: '32px'
        },
        skillsTitle: {
            fontSize: '1.125rem',
            fontWeight: '600',
            color: '#111827',
            marginBottom: '16px'
        },
        skillsGrid: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px'
        },
        skillTag: {
            padding: '6px 12px',
            backgroundColor: '#dbeafe',
            color: '#1e40af',
            borderRadius: '20px',
            fontSize: '14px',
            fontWeight: '500'
        },
        aboutImage: {
            width: '100%',
            borderRadius: '16px',
            filter: 'blur(0.5px)',
            boxShadow: '0 10px 25px rgba(0,0,0,0.2)',

        },
        statsSection: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        statsGrid: {

            gap: '24px',
            width: '100%'
        },
        statItem: {
            textAlign: 'center',
            padding: '20px',
            backgroundColor: '#f8fafc',
            borderRadius: '12px'
        },
        statNumber: {
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#1e40af',
            marginBottom: '8px'
        },
        statLabel: {
            fontSize: '14px',
            color: '#6b7280',
            fontWeight: '500'
        },

        // Section 3: Call to Action Section
        ctaSection: {
            backgroundColor: '#f9fafb',
            padding: '80px 24px',
            textAlign: 'center'
        },
        ctaTitle: {
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#111827',
            marginBottom: '16px'
        },
        ctaText: {
            color: '#6b7280',
            fontSize: '1.125rem',
            marginBottom: '32px',
            maxWidth: '600px',
            margin: '0 auto 32px',
            lineHeight: '1.6'
        },
        darkBtn: {
            backgroundColor: '#111827',
            color: 'white',
            padding: '18px 36px',
            borderRadius: '8px',
            fontWeight: '600',
            border: 'none',
            cursor: 'pointer',
            fontSize: '16px',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
        },

        // Responsive Design
        '@media (max-width: 768px)': {
            heroTitle: {
                fontSize: '2.5rem'
            },
            heroSubtitle: {
                fontSize: '1.25rem'
            },
            aboutGrid: {
                gridTemplateColumns: '1fr'
            },
            statsGrid: {
                gridTemplateColumns: '1fr'
            },
            ctaButtons: {
                flexDirection: 'column'
            }
        }
    };

    return (
        <div style={styles.homeContainer}>
            {/* Section 1: Hero Banner */}
            <section style={styles.heroSection}>
                <div style={styles.heroContent}>
                    <h1 style={styles.heroTitle}>
                        Hi, I'm <span style={styles.gradientText}>Claire</span>
                    </h1>
                    <p style={styles.heroSubtitle}>
                        Passionate about turning data into insights and building innovative web solutions.
                    </p>
                    <div style={styles.ctaButtons}>
                        <button style={styles.primaryBtn} onClick={() => navigate("/projects")}>
                            View My Work
                        </button>
                        <button style={styles.secondaryBtn} onClick={() => navigate("/contact")}>
                            Get In Touch
                        </button>
                    </div>
                </div>
            </section>

            {/* Section 2: About Section */}
            <section style={styles.aboutSection}>
                <div style={styles.wrapper}>
                    <div style={styles.aboutCard}>
                        <div style={styles.aboutGrid}>
                            {/* About Content */}
                            <div>
                                <h2 style={styles.aboutTitle}>About Me</h2>
                                <p style={styles.aboutText}>
                                    I started my career as an engineer in semiconductor manufacturing, where I developed a strong analytical mindset and honed my problem-solving skills. Over the years, my curiosity about data and technology led me to pursue a Bachelor of Applied Computer Science at BCIT and dive into data analytics and full-stack development.
                                </p>
                                <p style={styles.aboutText}>
                                    I love transforming complex datasets into meaningful insights and building tools that help people make better decisions. Whether it's predicting trends, visualizing key metrics, or creating interactive web applications, I thrive on solving challenging problems with a blend of creativity and technical expertise.
                                </p>
                                <p style={styles.aboutText}>
                                    When I'm not coding or analyzing data, I enjoy volunteering in my community, exploring new technologies, and sharing knowledge with others to foster learning and growth.
                                </p>

                                {/* Skills Tags */}
                                <div style={styles.skillsSection}>
                                    <h3 style={styles.skillsTitle}>Core Expertise</h3>
                                    <div style={styles.skillsGrid}>
                                        {['Data Analysis', 'Full Stack Development', 'Machine Learning', 'Data Visualization', 'Python', 'React', 'SQL', 'JavaScript'].map((skill) => (
                                            <span key={skill} style={styles.skillTag}>
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Stats Section */}
                            <div style={styles.statsSection}>
                                <div style={styles.statsGrid}>
                                    <img
                                        src="./files/IMG_2.JPG"
                                        alt="My profile"
                                        style={styles.aboutImage}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Call to Action */}
            <section style={styles.ctaSection}>
                <div style={styles.wrapper}>
                    <h3 style={styles.ctaTitle}>Ready to Work Together?</h3>
                    <p style={styles.ctaText}>
                        I'm always excited to take on new challenges and collaborate on innovative projects. Let's discuss how we can bring your ideas to life and create something amazing together.
                    </p>
                    <button style={styles.darkBtn} onClick={() => navigate("/projects")}>
                        Explore My Projects
                    </button>
                </div>
            </section>
        </div>
    );
}