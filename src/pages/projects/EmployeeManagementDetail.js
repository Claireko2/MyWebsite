import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import '../../App.css';


export default function ProjectDetail() {
    return (
        <div className="container">
            <div className="project-header">
                <h1 className="project-title">Employee Management System</h1>
                <p className="project-subtitle">
                    Full-stack web application for managing employees, clients, and services
                </p>
                <div className="project-meta">
                    <div className="meta-item">Duration: 2 months</div>
                    <div className="meta-item">Solo Project</div>
                    <div className="meta-item">Status: Completed</div>
                    <div className="meta-item">Year: 2024</div>
                </div>
                <div>
                    <a href="#" className="btn">Live Demo</a>
                    <a href="https://github.com/Claireko2/Employee-Service-Management-System.git" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">View Code</a>
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
                <p>Watch the demo to explore CRUD features and UI flow</p>
            </div>

            <div className="content-grid">
                <div className="main-content">
                    <h2 className="section-title">Project Overview</h2>
                    <p>
                        The Employee Management System is a full-stack web application built
                        with ASP.NET Core MVC and Entity Framework Core. It enables administrators
                        to manage employee and client records, assign services, and track
                        organizational data with CRUD operations and a responsive UI.
                    </p>

                    <h3>Key Features</h3>
                    <ul className="feature-list">
                        <li>Employee management: add, edit, delete, and view employee records</li>
                        <li>Client management with photo upload and service assignment</li>
                        <li>Role-based service assignment for employees</li>
                        <li>Validation and error handling for forms</li>
                        <li>Multi-select services for clients with delete option</li>
                        <li>Responsive Bootstrap-based UI</li>
                        <li>Database integration with Entity Framework Core</li>
                        <li>Dynamic count display on dashboard (employees, clients, services)</li>
                    </ul>

                    <h3>Technical Implementation</h3>
                    <p>
                        The system is built using ASP.NET Core MVC for the backend,
                        Entity Framework Core for ORM and database migrations, and
                        SQL Server (local) for data persistence.
                    </p>
                    <p>
                        Views are styled using Bootstrap with Razor pages for rendering.
                        JavaScript was added for dynamic interactivity (e.g., enabling/disabling
                        dropdowns and checkboxes). Controllers handle CRUD actions and pass
                        data through strongly typed models.
                    </p>

                    <h3>Challenges & Solutions</h3>
                    <p>
                        <strong>Challenge:</strong> Allowing clients to select multiple services
                        and optionally delete them all at once.
                    </p>
                    <p>
                        <strong>Solution:</strong> Implemented a <code>MultiSelectList</code> in
                        the controller and used form logic to toggle selections and handle
                        “Delete All Services” option.
                    </p>

                    <p>
                        <strong>Challenge:</strong> Displaying live counts of employees, clients,
                        and services on the dashboard.
                    </p>
                    <p>
                        <strong>Solution:</strong> Created ViewModels and passed aggregated counts
                        from the HomeController to the dashboard card components.
                    </p>

                    <h3>Screenshots</h3>
                    <div className="gallery">
                        <div className="gallery-item">Dashboard Overview</div>
                        <div className="gallery-item">Employee Edit Page</div>
                        <div className="gallery-item">Client Services Assignment</div>
                        <div className="gallery-item">Entity Schema (Models)</div>
                    </div>
                </div>

                <div className="sidebar">
                    <h3 className="section-title">Technologies Used</h3>
                    <div className="tech-grid">
                        <div className="tech-item">SQL Server</div>
                        <div className="tech-item">C#</div>
                        <div className="tech-item">Razor Pages</div>
                        <div className="tech-item">Bootstrap</div>
                        <div className="tech-item">JavaScript</div>
                        <div className="tech-item">LINQ</div>
                        <div className="tech-item">Visual Studio</div>
                        <div className="tech-item">GitHub</div>
                        <div className="tech-item">ASP.NET Core MVC</div>
                        <div className="tech-item">Entity Framework Core</div>
                    </div>

                    <h3>Project Stats</h3>
                    <ul className="feature-list">
                        <li>2 main entities: Employee & Client</li>
                        <li>1 supporting entity: Service</li>
                        <li>CRUD operations for all entities</li>
                        <li>File upload support for client photos</li>
                        <li>Responsive design with Bootstrap</li>
                        <li>Fully functional dashboard with counts</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
