import React from "react";
import { useNavigate } from "react-router-dom";
export default function Home() {
    const navigate = useNavigate();
    const styles = {
        Homecontainer: {
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #a4f873ff 0%, #26a8f4ff 100%)',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
        },
        wrapper: {
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '80px 24px'
        },
        heroSection: {
            textAlign: 'center',
            marginBottom: '80px'
        },

        profileImage: {
            width: '128px',
            height: '128px',
            backgroundColor: '#e5e7eb',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#6b7280',
            fontSize: '14px',
            fontWeight: '500'
        },
        heroTitle: {
            fontSize: '3.75rem',
            fontWeight: 'bold',
            color: '#111827',
            marginTop: '24px',
            marginBottom: '24px',
            lineHeight: '1.1'
        },
        gradientText: {
            background: ' #fcf8f8ff',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
        },
        heroSubtitle: {
            fontSize: '1.25rem',
            color: '#4b5563',
            marginBottom: '32px',
            maxWidth: '768px',
            margin: '0 auto 32px',
            lineHeight: '1.7'
        },
        ctaButtons: {
            display: 'flex',
            flexDirection: 'row',
            gap: '16px',
            justifyContent: 'center',
            alignItems: 'center'
        },
        primaryBtn: {
            background: ' #2563eb',
            color: 'white',
            padding: '16px 32px',
            borderRadius: '8px',
            fontWeight: '600',
            border: 'none',
            cursor: 'pointer',
            fontSize: '16px',
            transition: 'all 0.3s ease',
            textDecoration: 'none',
            display: 'inline-block'
        },
        secondaryBtn: {
            backgroundColor: 'white',
            color: '#374151',
            padding: '16px 32px',
            borderRadius: '8px',
            fontWeight: '600',
            border: '2px solid #e5e7eb',
            cursor: 'pointer',
            fontSize: '16px',
            transition: 'all 0.3s ease',
            textDecoration: 'none',
            display: 'inline-block'
        },
        aboutCard: {
            backgroundColor: 'white',
            borderRadius: '16px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            padding: '48px'
        },
        aboutGrid: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
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
        imageSection: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        professionalImageContainer: {
            position: 'relative',
            marginBottom: '32px'
        },
        professionalImage: {
            width: '320px',
            height: '320px',
            background: 'linear-gradient(135deg, #dbeafe, #e9d5ff)',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#6b7280',
            fontWeight: '500',
            textAlign: 'center',
            boxShadow: '0 10px 25px -3px rgba(0, 0, 0, 0.1)'
        },
        decorativeCircle1: {
            position: 'absolute',
            top: '-16px',
            right: '-16px',
            width: '80px',
            height: '80px',
            backgroundColor: '#bfdbfe',
            borderRadius: '50%',
            opacity: '0.6'
        },
        decorativeCircle2: {
            position: 'absolute',
            bottom: '-16px',
            left: '-16px',
            width: '64px',
            height: '64px',
            backgroundColor: '#e9d5ff',
            borderRadius: '50%',
            opacity: '0.6'
        },
        statsGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
            width: '100%'
        },
        statItem: {
            textAlign: 'center'
        },
        statNumber: {
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginBottom: '4px'
        },
        statLabel: {
            fontSize: '14px',
            color: '#6b7280'
        },
        ctaSection: {
            textAlign: 'center',
            marginTop: '80px'
        },
        ctaTitle: {
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#111827',
            marginBottom: '16px'
        },
        ctaText: {
            color: '#6b7280',
            marginBottom: '32px',
            maxWidth: '512px',
            margin: '0 auto 32px'
        },
        darkBtn: {
            backgroundColor: '#111827',
            color: 'white',
            padding: '16px 32px',
            borderRadius: '8px',
            fontWeight: '600',
            border: 'none',
            cursor: 'pointer',
            fontSize: '16px',
            transition: 'all 0.3s ease'
        },
        responsive: {
            '@media (max-width: 768px)': {
                gridTemplateColumns: '1fr',
                gap: '32px'
            }
        }
    };

    return (
        <div style={styles.Homecontainer}>
            <div style={styles.wrapper}>
                {/* Hero Section */}
                <div style={styles.heroSection}>
                    <div style={styles.profileImageContainer}>

                    </div>

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

                {/* About Section */}
                <div style={styles.aboutCard}>
                    <div style={{ ...styles.aboutGrid, '@media (max-width: 768px)': { gridTemplateColumns: '1fr' } }}>
                        {/* About Content */}
                        <div>
                            <h2 style={styles.aboutTitle}>
                                About Me
                            </h2>

                            <div>
                                <p style={styles.aboutText}>
                                    I started my career as an engineer in semiconductor manufacturing, where I developed a strong analytical mindset and honed my problem-solving skills. Over the years, my curiosity about data and technology led me to pursue a Bachelor of Applied Computer Science at BCIT and dive into data analytics and full-stack development.
                                </p>

                                <p style={styles.aboutText}>
                                    I love transforming complex datasets into meaningful insights and building tools that help people make better decisions. Whether it's predicting trends, visualizing key metrics, or creating interactive web applications, I thrive on solving challenging problems with a blend of creativity and technical expertise.
                                </p>

                                <p style={styles.aboutText}>
                                    When I'm not coding or analyzing data, I enjoy volunteering in my community, exploring new technologies, and sharing knowledge with others to foster learning and growth.
                                </p>
                            </div>

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

                        {/* Professional Image Section */}
                        <div style={styles.imageSection}>
                            <div style={styles.professionalImageContainer}>
                                <div style={styles.professionalImage}>
                                    <img
                                        src="./files/IMG_2.JPG"
                                        alt="icon"
                                        style={{ width: '100%', height: 'auto', verticalAlign: 'middle' }}
                                    />
                                </div>

                                <div style={styles.decorativeCircle1}></div>
                                <div style={styles.decorativeCircle2}></div>
                            </div>


                        </div>
                    </div>
                </div>

                {/* Call to Action Section */}
                <div style={styles.ctaSection}>
                    <h3 style={styles.ctaTitle}>
                        Welcome to My Website!
                    </h3>
                    <p style={styles.ctaText}>
                        I'm always excited to take on new challenges and collaborate on innovative projects. Let's discuss how we can bring your ideas to life.
                    </p>
                    <button style={styles.darkBtn} onClick={() => navigate("/projects")}>

                        See My Projects
                    </button>
                </div>
            </div>
        </div>
    );
}