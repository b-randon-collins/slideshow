// src/components/slides/ProjectOverviewSlide.jsx
import React from 'react';
import './ModelSlides.css';
import './ProjectOverviewSlides.css';

const ProjectOverviewSlide = () => (
    <div id="project-overview-slide">
        <h2>Project Overview</h2>
        <p>
            This social network application allows users to register, log in, create posts, and interact through comments and likes. 
            Real-time updates using Socket.IO reflecting changes instantly. 
            The application is built using RESTful API principles.
        </p>
        <div className="tech-sections-container">
            <div className="tech-section">
                <h3>Backend</h3>
                <div className="tech-cards-container">
                    <div className="tech-card">
                        <img src="/assets/python.png" alt="Python Logo" />
                        <h2>Python</h2> Uses class objects for models and validation.
                    </div>
                    <div className="tech-card">
                        <img src="/assets/flask.png" alt="Flask Logo" />
                        <h2>Flask</h2> Framework for building RESTful APIs.
                    </div>
                    <div className="tech-card">
                        <img src="/assets/sqlalchemy.png" alt="SQLAlchemy Logo" />
                        <h2>SQLAlchemy</h2> ORM tool that simplifies database interactions.
                    </div>
                    <div className="tech-card">
                        <img src="/assets/sqlite.png" alt="SQLite Logo" />
                        <h2>SQLite</h2> Lightweight database for easy setup and management.
                    </div>
                </div>
            </div>
            <div className="tech-section">
                <h3>Frontend</h3>
                <div className="tech-cards-container">
                    <div className="tech-card">
                    <img src="/assets/react.png" alt="React Logo" />

                        <h2>React</h2> Creates a responsive UI.
                    </div>
                    <div className="tech-card">
                    <img src="/assets/redux.png" alt="Recux Logo" />

                        <h2>Redux</h2> Manages app state across components.
                    </div>
                    <div className="tech-card">
                    <img src="/assets/socketio.png" alt="Socket.io Logo" />

                        <h2>Socket.IO</h2> Enables real-time updates to the UI.
                    </div>
                    <div className="tech-card">
                    <img src="/assets/formik.png" alt="Formik Logo" />
                        <h2>Formik</h2> Facilitates form management.
                    </div>
                    <div className="tech-card">
                    <img src="/assets/yup.png" alt="yup Logo" />
                        <h2>Yup</h2> Facilitates form validation.
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default ProjectOverviewSlide;
