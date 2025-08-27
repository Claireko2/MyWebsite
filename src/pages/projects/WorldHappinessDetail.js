import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import '../../App.css';


export default function WorldHappinessDetail() {

    return (
        <div className="container">
            <div className="project-header">
                <h1 className="project-title">World Happiness Analysis</h1>
                <p className="project-subtitle">
                    Regression and classification modeling of global happiness factors
                </p>
                <div className="project-meta">
                    <div className="meta-item">Duration: 3 months</div>
                    <div className="meta-item">Team: Solo Project</div>
                    <div className="meta-item">Status: Completed</div>
                    <div className="meta-item">Year: 2024</div>
                </div>
                <div>
                    <a href="#" className="btn">Download PDF</a>
                    <a href="https://github.com/Claireko2/World-Happiness-Analysis.git" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">View Code</a>
                </div>
            </div>

            <div className="content-grid">
                <div className="main-content">
                    <h2 className="section-title">Project Overview</h2>
                    <p>
                        This project explored global happiness datasets to identify the strongest
                        socio-economic drivers of happiness and predict country happiness categories.
                        The analysis combined regression, classification models, and exploratory
                        visualization for actionable insights.
                    </p>

                    <h3>Key Features</h3>
                    <ul className="feature-list">
                        <li>Exploratory data analysis using Python and Excel</li>
                        <li>Linear regression identified GDP, social support, and life expectancy as key factors</li>
                        <li>Classification models in R: Logistic Regression (80%), Neural Network (84%), kNN (83.9%), Decision Tree</li>
                        <li>Normalized multi-factor datasets for cross-country comparisons</li>
                        <li>Evaluated accuracy and confusion matrices for model comparison</li>
                    </ul>

                    <h3>Technical Implementation</h3>
                    <p>
                        Data preprocessing was performed with Python (Pandas, NumPy) and Excel.
                        Regression analysis was run in Python, while classification models were built and evaluated in R.
                        Results were visualized using Excel and Python plotting libraries.
                    </p>

                    <h3>Challenges & Solutions</h3>
                    <p><strong>Challenge:</strong> Multi-collinearity among socio-economic variables</p>
                    <p><strong>Solution:</strong> Applied correlation analysis and feature selection for model stability</p>

                    <p><strong>Challenge:</strong> Balancing interpretability and predictive accuracy</p>
                    <p><strong>Solution:</strong> Reported regression results for interpretability and ML models for performance</p>
                </div>

                <div className="sidebar">
                    <h3 className="section-title">Technologies Used</h3>
                    <div className="tech-grid">
                        <div className="tech-item">Python</div>
                        <div className="tech-item">R</div>
                        <div className="tech-item">MS Excel</div>
                        <div className="tech-item">Pandas</div>
                        <div className="tech-item">NumPy</div>
                        <div className="tech-item">Scikit-learn</div>
                    </div>

                    <h3>Project Stats</h3>
                    <ul className="feature-list">
                        <li>150+ countries analyzed</li>
                        <li>4 classification models compared</li>
                        <li>Best accuracy: 84% (Neural Network)</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
