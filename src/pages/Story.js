import React from "react";


export default function Story() {
    return (
        <div className="container">
            <div
                className="resume-banner"
                style={{
                    backgroundImage: 'url("./files/story.jpeg")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "220px",
                    borderRadius: "8px",
                    marginBottom: "20px"
                }}
            ></div>
            <div className="resume-header">
                <h1 className="resume-title">Claire Ko</h1>
                <p>Thrive in solving complex problems and finding meaning in data, technology, and everyday experiences.</p>
                <br />
                <div className="contact-info space-y-2">
                    <div className="contact-item">
                        <i className="fas fa-envelope"></i> lko16@my.bcit.ca
                    </div>
                    <div className="contact-item">
                        <i className="fas fa-phone"></i> 236-992-5696
                    </div>
                    <div className="contact-item">
                        <i className="fab fa-github"></i>
                        <a
                            href="https://github.com/Claireko2"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:underline"
                        >
                            GitHub
                        </a>
                    </div>
                    <div className="contact-item">
                        <i className="fas fa-map-marker-alt"></i> Vancouver, B.C.
                    </div>
                </div>

                <a
                    href="./files/Claire_Ko_Resume.pdf"
                    className="download-btn"
                    download
                >
                    Download PDF Resume
                </a>
            </div>

            <div className="resume-content">
                {/* Story / Journey */}
                <div className="section">
                    <h2 className="section-title">
                        <span className="section-icon"></span>
                        My Journey
                    </h2>
                    <p className="summary">
                        My career began in engineering, where I spent years analyzing complex
                        manufacturing processes and driving yield improvements at TSMC.
                        While I loved solving technical problems, I found myself drawn to the
                        power of data—the ability to uncover insights, inform decisions, and
                        build smarter solutions.
                    </p>
                    <p className="summary">
                        This curiosity led me to pursue data analytics and full-stack development.
                        Today, I combine engineering precision, programming skills, and data-driven
                        storytelling to create web applications, predictive models, and interactive dashboards.
                        I thrive at the intersection of analytics, software development, and real-world impact.
                    </p>
                </div>
                {/* Technical Skills */}
                <div className="section">
                    <h2 className="section-title">
                        <span className="section-icon"></span>
                        Technical Skills
                    </h2>
                    <div className="skills-grid">
                        <div className="skill-category">
                            <h3>Programming Languages</h3>
                            <div className="skill-tags">
                                <span className="skill-tag">Python</span>
                                <span className="skill-tag">R</span>
                                <span className="skill-tag">C/C#</span>
                                <span className="skill-tag">JavaScript</span>
                                <span className="skill-tag">TypeScript</span>
                                <span className="skill-tag">SQL</span>
                                <span className="skill-tag">HTML</span>
                                <span className="skill-tag">CSS</span>
                                <span className="skill-tag">Bash</span>
                            </div>
                        </div>
                        <div className="skill-category">
                            <h3> Data Analysis & Visualization</h3>
                            <div className="skill-tags">
                                <span className="skill-tag">Tableau</span>
                                <span className="skill-tag">Power BI</span>
                                <span className="skill-tag">Excel</span>
                                <span className="skill-tag">Pandas</span>
                                <span className="skill-tag">NumPy</span>
                                <span className="skill-tag">Scikit-Learn</span>
                                <span className="skill-tag">Plotly</span>
                            </div>
                        </div>

                        <div className="skill-category">
                            <h3>Web & Backend</h3>
                            <div className="skill-tags">
                                <span className="skill-tag">React</span>
                                <span className="skill-tag">Next.js</span>
                                <span className="skill-tag">Node.js</span>
                                <span className="skill-tag">Express.js</span>
                                <span className="skill-tag">ASP.NET</span>
                                <span className="skill-tag">PostgreSQL</span>
                                <span className="skill-tag">MongoDB</span>
                            </div>
                        </div>
                        <div className="skill-category">
                            <h3> Supervised ML Models</h3>
                            <div className="skill-tags">
                                <span className="skill-tag">Linear Regression</span>
                                <span className="skill-tag">Logistic Regression</span>
                                <span className="skill-tag">k-Nearest Neighbors (kNN)</span>
                                <span className="skill-tag">Neural Networks</span>
                                <span className="skill-tag">Decision Trees</span>
                                <span className="skill-tag">Classification & Regression</span>
                            </div>
                        </div>
                        <div className="skill-category">
                            <h3> NLP / Statistical Techniques</h3>
                            <div className="skill-tags">
                                <span className="skill-tag">NLP - n-gram Analysis</span>
                                <span className="skill-tag">Confidence Intervals</span>
                                <span className="skill-tag">Hypothesis Testing</span>
                                <span className="skill-tag">Statistical Analysis</span>
                                <span className="skill-tag">P-values & Significance Testing</span>
                            </div>
                        </div>
                        <div className="skill-category">
                            <h3>Tools & Platforms</h3>
                            <div className="skill-tags">
                                <span className="skill-tag">Git</span>
                                <span className="skill-tag">Jira</span>
                                <span className="skill-tag">Confluence</span>
                                <span className="skill-tag">Docker</span>
                                <span className="skill-tag">AWS</span>
                                <span className="skill-tag">Jenkins</span>
                            </div>
                        </div>


                    </div>
                </div>
                {/* Projects */}
                <div className="section">
                    <h2 className="section-title">
                        <span className="section-icon"></span>
                        Selected Projects
                    </h2>
                    <div className="experience-item">
                        <div className="job-title">Career Compass (Job-Market Analytics)</div>
                        <div className="date">July 2025</div>
                        <ul className="responsibilities">
                            <li>
                                Features: Integrates ESCO skill datasets with external job APIs, performs skill–job matching,
                                using NLP (n-gram analysis), provides personalized gap analysis, and visualizes insights with interactive
                                dashboards (Power BI / web frontend).
                            </li>
                            <li>
                                Strengths: Combines data analysis, machine learning, and full-stack development; enables data-driven
                                career planning, skill prioritization, and market trend visualization for Data Analyst and Developer roles.
                            </li>
                            <li>
                                Tech Stack: Python, NLP (n-gram), Pandas, NumPy, Scikit-Learn, PostgreSQL, Prisma, Node.js, Express, Next.js,
                                React, Power BI, Plotly, Chart.js, external job APIs
                            </li>
                        </ul>
                    </div>
                    <div className="experience-item">
                        <div className="job-title">Weather Predict Web App</div>
                        <div className="date">April 2025</div>
                        <ul className="responsibilities">
                            <li>
                                Features: Developed a real-time data pipeline using Python, OpenWeather API, and EdgeDB to collect, clean, and store weather data.
                            </li>
                            <li>
                                Analytics: Applied logistic regression (Scikit-Learn) to forecast rainfall probability and visualized results with interactive Plotly charts.
                            </li>
                            <li>
                                Strengths: Combines data engineering, statistical modeling, and visualization to support data-driven environmental monitoring.
                            </li>
                            <li>
                                Tech Stack: Python, OpenWeather API, EdgeDB, Pandas, NumPy, Scikit-Learn, Plotly
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Professional Experience */}
                <div className="section">
                    <h2 className="section-title">
                        <span className="section-icon"></span>
                        Professional Experience
                    </h2>
                    <div className="experience-item">
                        <div className="job-title">Intermediate Quality Assurance Specialist</div>
                        <div className="company">Ensemble Systems Inc. | Vancouver</div>
                        <div className="date">Jun 2021 – May 2024</div>
                        <ul className="responsibilities">
                            <li>Analyzed QA test outcomes to identify defect trends, reducing defect rates and supporting data-driven decision-making in agile environments.</li>
                            <li>Built reusable documentation and test case repositories, improving test coverage tracking and enhancing release stability.</li>
                            <li>Trained new QA team members on testing methodologies, tools, and project-specific workflows to ensure consistent quality standards and efficient onboarding.</li>
                            <li>Conducted functional testing on web and software applications to ensure compliance with business requirements and project specifications.</li>
                            <li>Collaborated cross-functionally with developers, PMs, and BAs to troubleshoot, track, and resolve software defects effectively.</li>
                        </ul>
                    </div>

                    <div className="experience-item">
                        <div className="job-title">Process Integration Engineer</div>
                        <div className="company">TSMC | Hsinchu, Taiwan</div>
                        <div className="date">2010 – 2017</div>
                        <ul className="responsibilities">
                            <li>Analyzed low-yield issues (~20%) across multiple manufacturing fabs (Taiwan/China) using EDA and inline process data analysis in Microsoft Excel (Pivot Tables, Charts, Advanced Formulas), resulting in 18% yield improvement and earning formal customer recognition.</li>
                            <li>Contributed to new generation technology development with the R&D team by conducting experiments and collaborating with interdepartmental teams.</li>
                            <li>Facilitated interdepartmental and customer-facing meetings to present findings and align technical strategies on production and technology development.</li>
                        </ul>
                    </div>

                </div>

                {/* Education */}
                <div className="section">
                    <h2 className="section-title">
                        <span className="section-icon"></span>
                        Education
                    </h2>
                    <div className="education-item">
                        <div className="degree-title">Bachelor of Applied Computer Science (Database Option)</div>
                        <div className="institution">BCIT | Burnaby, B.C.</div>
                        <div className="date">Expected Dec 2027</div>
                        <p>GPA: 92%</p>
                    </div>
                    <div className="education-item">
                        <div className="degree-title">M.Sc. in Applied Physics</div>
                        <div className="institution">Chung Yuan Christian University | Taiwan</div>
                        <div className="date">2004 – 2010</div>
                    </div>
                </div>

                {/* Volunteer Work */}
                <div className="section">
                    <h2 className="section-title">
                        <span className="section-icon"></span>
                        Volunteer Work
                    </h2>
                    <ul className="responsibilities">
                        <li><b>Vancouver Public Library (2025):</b> Supported fundraising event logistics and guest coordination.</li>
                        <li><b>Vancouver Short Film Festival (2025):</b> Assisted with guest seating and event coordination.</li>
                        <li><b>BabyGoRound (2025–Now):</b> Inspected, cleaned, and assembled baby gear to meet safety standards and support families in need.</li>
                    </ul>
                </div>


            </div>
        </div>
    );
}

