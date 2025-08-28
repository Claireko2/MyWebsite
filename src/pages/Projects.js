import React from "react";
import { Link } from "react-router-dom";

const projects = [
    {
        id: "career-compass",
        title: "Career Compass Web App",
        description: "Built Career Compass, a job-market analytics platform leveraging Python and PostgreSQL for data cleaning and storage, and Power BI (DAX measures, interactive tables, dashboards) to deliver skill-demand insights, matching rates, and personalized gap analysis.",
        tech: ["Next.js / React", "Node.js / Express", "Python", "Power BI", "PostgreSQL", "Pandas / NumPy", "Scikit-Learn", "Chart.js"],
        image: "./files/Career_Compass_1.png",
        link: "/projects/career-compass"
    },
    {
        id: "weather-predict",
        title: "Weather Predict Web App",
        description: "A real-time data pipeline to collect and store weather data using Python, OpenWeather API, and Edge DB; applied logistic regression with Scikit-Learn to forecast rainfall probability and visualized data using Plotly to support data-driven environmental monitoring",
        tech: ["Python", "Pandas", "Scikit-learn", "OpenWeather API", "Edge DB", "Plotly", "Uvicorn"],
        image: "./files/Weather_1.png",
        link: "/projects/weather-predict"
    },
    {
        id: "youtube-trending",
        title: "YouTube Trending Video Analysis",
        description: "Analyzed international YouTube trending video data using Python, R, and Excel to uncover viewer behavior and content popularity, performed statistical analyses with 95% confidence intervals, and visualized key trends in Tableau and Excel to provide actionable insights for digital content strategy.",
        tech: ["Jupyter Notebook", "Python", "matplotlib", "Statistical analysis", "Exploratory Analysis", "Confidence Interval"],
        image: "./files/Youtube_1.png",
        link: "/projects/youtube-trending"
    },
    {
        id: "world-happiness",
        title: "World Happiness Analysis",
        description: "Conducted exploratory data analysis and linear regression on global happiness data to identify key drivers of happiness, and built multiple classification models in R—including logistic regression, neural networks, decision trees, and kNN—to predict country happiness categories and life expectancy with up to 84% accuracy",
        tech: ["Jupyter Notebook", "Python", "Linear Regression", "Logistic Regression", "Neural Networks", "Decision Trees", "k-Nearest Neighbors (kNN)"],
        image: "./files/World_Happiness_1.png",
        link: "/projects/world-happiness"
    },
    {
        id: "foodoor-app",
        title: "Foodoor Food Ordering App",
        description: "Built a responsive food ordering web application using React, integrating Firebase Authentication. Connected the app to the Yelp Fusion API for real-time restaurant data by location, and implemented automated order notifications via Resend API, enhancing user engagement and seamless communication.",
        tech: ["React", "Firebase Authentication", "Firebase Firestore", "Rest API", "Yelp Fusion API", "Resend API"],
        image: "./files/Foodoor_1.png",
        link: "/projects/foodoor-app"
    },
    {
        id: "employee-management",
        title: "Employee Management System",
        description: "Developed a full-stack Employee Management System using ASP.NET Core MVC and Entity Framework Core, enabling administrators to efficiently manage employee records—including salaries, services, and personal details—with robust CRUD functionality. Implemented dynamic data binding and a responsive UI, demonstrating expertise in database integration.",
        tech: ["ASP.NET Core MVC", "Entity Framework Core", "C#", "SQL", "CRUD Operations", "Oracle SQL"],
        image: "./files/MVC_1.png",
        link: "/projects/employee-management"
    }
];

export default function Projects() {
    return (
        <div className="container">
            <div id="projects" className="page active">
                <h1 className="section-title">My Projects</h1>
                <div className="projects-grid">
                    {projects.map(project => (
                        <Link key={project.id} to={project.link} className="project-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                            {project.image && <img src={project.image} alt={project.title} className="project-image" />}
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-tech">
                                {project.tech.map((techItem, idx) => (
                                    <span key={idx} className="tech-tag">{techItem}</span>
                                ))}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
