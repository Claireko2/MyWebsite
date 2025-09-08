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
                    <div className="meta-item">Team: Solo Project</div>
                    <div className="meta-item">Status: Completed</div>
                    <div className="meta-item">Year: 2024</div>
                </div>
                <div>
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
                        <li>Statistical analysis with Pandas, NumPy, and Scipy to compare engagement metrics</li>
                        <li>Constructed 95% confidence intervals to validate hypotheses</li>
                        <li>Identified optimal publishing times and regional content preferences</li>
                    </ul>

                    <h3>Technical Implementation</h3>
                    <p>
                        Data was export from Excel and preprocessed in Python (Pandas, NumPy) via Jupyter Notebook
                        for exploratory summaries. Hypothesis testing and interval estimation were performed in Scipy.
                    </p>
                </div>

                <div className="sidebar">
                    <h3 className="section-title">Technologies Used</h3>
                    <div className="tech-grid">
                        <div className="tech-item">Python</div>
                        <div className="tech-item">Pandas</div>
                        <div className="tech-item">NumPy</div>
                        <div className="tech-item">Scipy</div>
                        <div className="tech-item">MS Excel</div>
                        <div className="tech-item">Matplotlib</div>
                    </div>

                    <h3>Project Stats</h3>
                    <ul className="feature-list">
                        <li>10,000+ video records analyzed</li>
                        <li>4 visulization chart created</li>
                        <li>95% confidence intervals constructed</li>
                    </ul>

                </div>
            </div>
        </div>
    );
}
