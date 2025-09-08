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
                    <div className="meta-item">Duration: 1.5 months</div>
                    <div className="meta-item">Team: Individual</div>
                    <div className="meta-item">Status: In Progress</div>
                    <div className="meta-item">Year: 2025</div>
                </div>
                <div>
                    <a href="https://career-compass-frontend-hazel.vercel.app" className="btn">Live Demo</a>
                    <a href="https://github.com/Claireko2/CareerCompass.git" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">View Code</a>
                </div>
            </div>
            <div class="video-container">
                <h2 class="section-title">Demo Video</h2>
                <div class="video-wrapper">
                    <iframe
                        src="https://www.youtube.com/embed/vz89MlRpv3w?si=OD4tjxa_3tMcHtRa"
                        title="Demo Video"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </div>
                <h3 class="video-title">React CRUD App Demo</h3>
                <p class="text-center mt-2">Watch the demo to explore CRUD features and UI flow</p>
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
                        Power BI interactive Dashboard. Prisma manages the database schema and integrations with multiple skill ontologies.
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
