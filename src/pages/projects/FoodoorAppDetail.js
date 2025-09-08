import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import '../../App.css';


export default function ProjectDetail() {
    return (
        <div className="container">
            <div className="project-header">
                <h1 className="project-title">Foodoor – Food Ordering Web App</h1>
                <p className="project-subtitle">
                    Responsive food ordering platform with real-time restaurant data
                </p>
                <div className="project-meta">
                    <div className="meta-item">Team: Solo project</div>
                    <div className="meta-item">Status: Completed</div>
                    <div className="meta-item">Year: 2024</div>
                </div>
                <div>
                    <a href="https://github.com/Claireko2/foodoor-app.git" target="_blank" rel="noopener noreferrer" className="btn ">View Code</a>
                </div>
            </div>

            <div class="video-container">
                <h2 class="section-title">Demo Video</h2>
                <div class="video-wrapper">
                    <iframe
                        src="https://www.youtube.com/embed/RpcmQ6v2S64?si=it2JWFr5nhAqp_Qf"
                        title="Demo Video"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </div>
                <h3 class="video-title">Food Ordering App Demo</h3>
                <p class="text-center mt-2">Watch the demo to explore App features and UI flow</p>
            </div>

            <div className="content-grid">
                <div className="main-content">
                    <h2 className="section-title">Project Overview</h2>
                    <p>
                        Foodoor is a responsive food ordering web application designed to make dining
                        discovery and online ordering seamless. It integrates real-time restaurant
                        and menu data from the Yelp Fusion API, while leveraging Firebase for
                        secure authentication and user profile management. Automated order and
                        notification emails are powered by the Resend API.
                    </p>

                    <h3>Key Features</h3>
                    <ul className="feature-list">
                        <li>Mobile-first, responsive user interface with React</li>
                        <li>Secure authentication and profile management using Firebase</li>
                        <li>Real-time restaurant and menu data from Yelp Fusion API</li>
                        <li>Personalized dashboards with saved orders and preferences</li>
                        <li>Automated transactional emails (order confirmations, updates) via Resend API</li>
                        <li>Search and filter options for restaurants and cuisines</li>
                        <li>Favorites and order history tracking</li>
                    </ul>

                    <h3>Technical Implementation</h3>
                    <p>
                        The frontend is built with React and React Router for seamless navigation.
                        Firebase Authentication and Firestore are used for secure login, profile storage,
                        and order tracking. Yelp Fusion API integration fetches live restaurant and
                        menu details, dynamically rendered in the UI.
                    </p>
                    <p>
                        The app also integrates Resend API for sending real-time order confirmation
                        and update emails. Data is cached where possible to improve performance, and
                        the app is fully responsive across devices.
                    </p>
                </div>

                <div className="sidebar">
                    <h3 className="section-title">Technologies Used</h3>
                    <div className="tech-grid">
                        <div className="tech-item">React</div>
                        <div className="tech-item">Firebase Auth</div>
                        <div className="tech-item">Firestore</div>
                        <div className="tech-item">Yelp Fusion API</div>
                        <div className="tech-item">Resend API</div>
                        <div className="tech-item">React Router</div>
                        <div className="tech-item">CSS3</div>
                    </div>

                    <h3>Project Stats</h3>
                    <ul className="feature-list">
                        <li>5,000+ lines of code</li>
                        <li>20+ API integrations</li>
                        <li>100% mobile responsive</li>
                        <li>Real-time API-driven data</li>
                        <li>Secure authentication flow</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
