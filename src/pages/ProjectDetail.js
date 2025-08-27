import React from "react";
import { useParams, Link } from "react-router-dom";

export default function ProjectDetail() {
    return (
        <div>
            <div className="project-header">
                <Link to="/projects" className="back-btn">← Back to Projects</Link>
                <h1 className="project-title">E-Commerce Analytics Dashboard</h1>
                <p className="project-subtitle">
                    Real-time analytics platform for e-commerce businesses
                </p>
                <div className="project-meta">
                    <div className="meta-item">Duration: 3 months</div>
                    <div className="meta-item">Team: 4 developers</div>
                    <div className="meta-item">Status: Completed</div>
                    <div className="meta-item">Year: 2024</div>
                </div>
                <div>
                    <a href="#" className="btn">Live Demo</a>
                    <a href="#" className="btn btn-secondary">View Code</a>
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
                        The E-Commerce Analytics Dashboard is a comprehensive real-time
                        analytics platform designed to help online businesses understand
                        their customers, track sales performance, and optimize their
                        operations. Built with modern web technologies, it provides intuitive
                        visualizations and actionable insights.
                    </p>

                    <h3>Key Features</h3>
                    <ul className="feature-list">
                        <li>Real-time sales tracking and reporting</li>
                        <li>Customer behavior analysis and segmentation</li>
                        <li>Interactive data visualizations with D3.js</li>
                        <li>Inventory management and alerts</li>
                        <li>Revenue forecasting using machine learning</li>
                        <li>Mobile-responsive design</li>
                        <li>Export capabilities (PDF, Excel, CSV)</li>
                        <li>Role-based access control</li>
                        <li>API integration with popular e-commerce platforms</li>
                    </ul>

                    <h3>Technical Implementation</h3>
                    <p>
                        The dashboard follows a modern microservices architecture with a
                        React frontend communicating with a Node.js backend through RESTful
                        APIs. Data processing is handled by Python scripts that run scheduled
                        jobs to update analytics in real-time.
                    </p>

                    <p>
                        The visualization layer uses D3.js for custom charts and Recharts for
                        standard business charts. The database layer consists of PostgreSQL
                        for transactional data and Redis for caching frequently accessed
                        analytics.
                    </p>

                    <h3>Challenges & Solutions</h3>
                    <p>
                        <strong>Challenge:</strong> Handling large datasets with real-time
                        updates without impacting performance.
                    </p>
                    <p>
                        <strong>Solution:</strong> Implemented data pagination, caching
                        strategies, and optimized database queries. Used WebSocket
                        connections for real-time updates.
                    </p>

                    <p>
                        <strong>Challenge:</strong> Creating intuitive data visualizations
                        for non-technical users.
                    </p>
                    <p>
                        <strong>Solution:</strong> Conducted user research and iterative
                        design process. Implemented tooltips, guided tours, and customizable
                        dashboard layouts.
                    </p>

                    <h3>Screenshots</h3>
                    <div className="gallery">
                        <div className="gallery-item">Dashboard Overview</div>
                        <div className="gallery-item">Sales Analytics</div>
                        <div className="gallery-item">Customer Insights</div>
                        <div className="gallery-item">Inventory Management</div>
                    </div>
                </div>

                <div className="sidebar">
                    <h3 className="section-title">Technologies Used</h3>
                    <div className="tech-grid">
                        <div className="tech-item">React</div>
                        <div className="tech-item">Node.js</div>
                        <div className="tech-item">Python</div>
                        <div className="tech-item">D3.js</div>
                        <div className="tech-item">PostgreSQL</div>
                        <div className="tech-item">Redis</div>
                        <div className="tech-item">Flask</div>
                        <div className="tech-item">Docker</div>
                        <div className="tech-item">AWS</div>
                        <div className="tech-item">WebSocket</div>
                    </div>

                    <h3>Project Stats</h3>
                    <ul className="feature-list">
                        <li>15,000+ lines of code</li>
                        <li>50+ API endpoints</li>
                        <li>12 custom visualizations</li>
                        <li>99.9% uptime achieved</li>
                        <li>2.5s average load time</li>
                        <li>Mobile responsive design</li>
                    </ul>

                    <h3>Links</h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        <a href="#" className="btn">Live Demo</a>
                        <a href="#" className="btn btn-secondary">GitHub Repository</a>
                        <a href="#" className="btn btn-secondary">Documentation</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

