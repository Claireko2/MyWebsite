import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import '../../App.css';


export default function ProjectDetail() {

    return (
        <div className="container">
            <div className="project-header">
                <h1 className="project-title">Career Compass – Smart Job Tracking & Analytics App</h1>
                <p className="project-subtitle">
                    A full-stack platform for tracking job applications, analyzing market trends, and skill development.
                </p>
                <div className="project-meta">
                    <div className="meta-item">Duration: 4 months</div>
                    <div className="meta-item">Team: Individual</div>
                    <div className="meta-item">Status: In Progress</div>
                    <div className="meta-item">Year: 2025</div>
                </div>
                <div>
                    <a href="#" className="btn">Live Demo</a>
                    <a href="https://github.com/Claireko2/CareerCompass.git" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">View Code</a>
                </div>
            </div>
            <div className="video-container">
                <h2 className="section-title">Demo Video</h2>
                <video
                    className="demo-video"
                    controls
                    poster="https://placehold.co/800x450?text=Demo+Video"
                >
                    Your browser does not support the video tag.
                </video>
                <p>Watch the full demo to see all features in action</p>
            </div>
            <div className="content-grid">
                <div className="main-content">
                    <h2 className="section-title">Project Overview</h2>
                    <p>
                        Career Compass is a full-stack web application designed to help job seekers manage applications,
                        visualize skill trends, and receive personalized job recommendations. The app integrates market
                        data with resume analysis to guide career decisions.
                    </p>

                    <h3>Key Features</h3>
                    <ul className="feature-list">
                        <li>Track job applications and statuses</li>
                        <li>Real time job posting searcching system by job title and area</li>
                        <li>Resume vs. job description skill match analysis</li>
                        <li>Market trend visualization and top skill dashboards</li>
                        <li>Interactive charts for skill demand and job skill comparison</li>
                        <li>Personalized job recommendations based on skills</li>
                    </ul>

                    <h3>Technical Implementation</h3>
                    <p>
                        The application uses a React frontend with Next.js API routes, PostgreSQL for structured data,
                        and Python scripts for resume parsing and skill matching. Data visualization is implemented with
                        Recharts and D3.js. Prisma manages the database schema and integrations with multiple skill ontologies.
                    </p>

                    <h3>Challenges & Solutions</h3>
                    <p>
                        <strong>Challenge:</strong> Resume–job description matching was hindered by inconsistent skill naming, synonyms, and variations in text representation.
                    </p>
                    <p>
                        <strong>Solution:</strong> Developed an NLP pipeline using n-gram tokenization and text normalization to extract candidate skills from resumes and job postings. Mapped extracted terms to a normalized ESCO skill set to unify synonyms and reduce duplicates, enabling accurate resume–job skill gap analysis.
                    </p>
                    <p>
                        <strong>Challenge:</strong> Visualizing evolving skill demand and trends effectively for end-users.
                    </p>
                    <p>
                        <strong>Solution:</strong> Used interactive charts, filtering options to make insights actionable.
                    </p>
                </div>

                <div className="sidebar">
                    <h3 className="section-title">Technologies Used</h3>
                    <div className="tech-grid">
                        <div className="tech-item">React</div>
                        <div className="tech-item">Next.js</div>
                        <div className="tech-item">Python</div>
                        <div className="tech-item">Node.js</div>
                        <div className="tech-item">Express</div>
                        <div className="tech-item">Pandas</div>
                        <div className="tech-item">Power BI</div>
                        <div className="tech-item">PostgreSQL</div>
                        <div className="tech-item">Prisma</div>
                        <div className="tech-item">REST APIs</div>
                        <div className="tech-item">NLP-Ngram</div>
                    </div>

                    <h3>Future Enhancements</h3>
                    <ul className="feature-list">
                        <li>Company and role clustering with hidden category insights</li>
                        <li>Interactive charts for skill demand, decay, and inflation</li>
                        <li>Export data and reports for personal tracking</li>
                        <li>Responsive design for desktop and mobile</li>
                    </ul>

                </div>
            </div>
        </div>
    );
}
