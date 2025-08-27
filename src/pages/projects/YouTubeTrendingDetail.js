import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import '../../App.css';

export default function YouTubeTrendingDetail() {

    return (
        <div className="container" >
            <div className="project-header">
                <h1 className="project-title">YouTube Trending Video Analysis</h1>
                <p className="project-subtitle">
                    Statistical and visual analysis of global YouTube trends
                </p>
                <div className="project-meta">
                    <div className="meta-item">Duration: 2 months</div>
                    <div className="meta-item">Team: Solo Project</div>
                    <div className="meta-item">Status: Completed</div>
                    <div className="meta-item">Year: 2024</div>
                </div>
                <div>
                    <a href="#" className="btn">Download PDF</a>
                    <a href="https://github.com/Claireko2/Youtube-Video-Analysis.git" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">View Code</a>
                </div>
            </div>

            <div className="content-grid">
                <div className="main-content">
                    <h2 className="section-title">Project Overview</h2>
                    <p>
                        This project analyzed international YouTube trending video data to uncover insights
                        on viewer behavior, content popularity, and engagement metrics. Using Python, R,
                        and Excel, I conducted descriptive and inferential analysis and built Tableau dashboards
                        to provide actionable insights for digital content strategy.
                    </p>

                    <h3>Key Features</h3>
                    <ul className="feature-list">
                        <li>Analyzed global YouTube trending datasets (views, likes, categories, comments)</li>
                        <li>Statistical analysis with Pandas, NumPy, and R to compare engagement metrics</li>
                        <li>Constructed 95% confidence intervals to validate hypotheses</li>
                        <li>Tableau dashboards for content category performance and likes-to-view ratios</li>
                        <li>Identified optimal publishing times and regional content preferences</li>
                    </ul>

                    <h3>Technical Implementation</h3>
                    <p>
                        Data was preprocessed in Python (Pandas, NumPy) and R, then aggregated into Excel
                        for exploratory summaries. Hypothesis testing and interval estimation were performed in R.
                        Tableau dashboards were designed for stakeholder reporting.
                    </p>

                    <h3>Challenges & Solutions</h3>
                    <p><strong>Challenge:</strong> Large and noisy datasets with inconsistent category labels</p>
                    <p><strong>Solution:</strong> Applied preprocessing and standardized category mappings in Python</p>

                    <p><strong>Challenge:</strong> Communicating statistical insights to non-technical audiences</p>
                    <p><strong>Solution:</strong> Built intuitive Tableau dashboards with drill-down features and Excel charts</p>
                </div>

                <div className="sidebar">
                    <h3 className="section-title">Technologies Used</h3>
                    <div className="tech-grid">
                        <div className="tech-item">Python</div>
                        <div className="tech-item">R</div>
                        <div className="tech-item">Pandas</div>
                        <div className="tech-item">NumPy</div>
                        <div className="tech-item">MS Excel</div>
                        <div className="tech-item">Tableau</div>
                    </div>

                    <h3>Project Stats</h3>
                    <ul className="feature-list">
                        <li>10,000+ video records analyzed</li>
                        <li>5+ Tableau dashboards created</li>
                        <li>95% confidence intervals constructed</li>
                    </ul>

                </div>
            </div>
        </div>
    );
}
