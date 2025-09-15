import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import '../../App.css';


export default function WeatherPredictDetail() {
    return (
        <div className="container">
            <div className="project-header">
                <h1 className="project-title">Weather Predict Web App</h1>
                <p className="project-subtitle">
                    Edge-computing powered weather forecasting with real-time data and ML
                </p>
                <div className="project-meta">
                    <div className="meta-item">Team: Solo Project</div>
                    <div className="meta-item">Status: Completed</div>
                    <div className="meta-item">Year: 2024</div>
                </div>
                <div>
                    <a href="https://github.com/Claireko2/Weather-Predict-App.git" className="btn" target="_blank" rel="noopener noreferrer" >View Code</a>
                </div>
            </div>

            <div class="video-container">
                <h2 class="section-title">Demo Video</h2>
                <div class="video-wrapper">
                    <iframe
                        src="https://www.youtube.com/embed/TOW2xly8CKo?si=ywA2xsgIeecFXkGj"
                        title="Demo Video"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </div>
                <h3 class="video-title">Real Time Weather Predict App Demo</h3>
                <p class="text-center mt-2">Watch the demo to explore App features and UI flow</p>
            </div>

            <div className="content-grid">
                <div className="main-content">
                    <h2 className="section-title">Project Overview</h2>
                    <p>
                        The Weather Predict Web App is an edge-computing powered system
                        that integrates real-time data from the OpenWeather API with
                        EdgeDB for structured storage. A logistic regression model was
                        trained using Scikit-Learn to predict rainfall probability, and
                        results are visualized interactively with Plotly charts.
                    </p>

                    <h3>Key Features</h3>
                    <ul className="feature-list">
                        <li>Real-time weather data ingestion from OpenWeather API</li>
                        <li>EdgeDB for structured, scalable data storage</li>
                        <li>Logistic regression model to forecast rainfall probability</li>
                        <li>FastAPI backend with Uvicorn for lightweight deployment</li>
                        <li>Interactive data visualization with Plotly</li>
                        <li>Edge-computing architecture for faster response time</li>
                    </ul>

                    <h3>Technical Implementation</h3>
                    <p>
                        The backend is powered by <strong>FastAPI</strong> and deployed
                        with <strong>Uvicorn</strong>, providing high-performance REST
                        endpoints for real-time weather queries. Weather data is
                        collected via <strong>OpenWeather API</strong> and stored in
                        <strong> EdgeDB</strong>.
                    </p>
                    <p>
                        A <strong>Scikit-Learn logistic regression model</strong> is
                        trained on historical multi-factor datasets (temperature, humidity,
                        pressure) to predict rainfall probability. The results are displayed
                        using <strong>Plotly visualizations</strong>, allowing users to
                        interactively explore forecast confidence.
                    </p>

                </div>

                <div className="sidebar">
                    <h3 className="section-title">Technologies Used</h3>
                    <div className="tech-grid">
                        <div className="tech-item">Python</div>
                        <div className="tech-item">FastAPI</div>
                        <div className="tech-item">Uvicorn</div>
                        <div className="tech-item">EdgeDB</div>
                        <div className="tech-item">Scikit-Learn</div>
                        <div className="tech-item">Pandas</div>
                        <div className="tech-item">Plotly</div>
                        <div className="tech-item">Docker</div>
                        <div className="tech-item">OpenWeather API</div>
                    </div>

                    <h3>Future Enhancements</h3>
                    <ul className="feature-list">
                        <li>Multi-day rainfall prediction</li>
                        <li>Deploy on cloud for public access</li>
                        <li>Integrate more environmental data sources for richer insights</li>
                    </ul>

                </div>
            </div>
        </div>
    );
}
