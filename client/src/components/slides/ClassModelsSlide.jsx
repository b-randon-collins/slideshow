// src/components/slides/ClassModelsSlide.jsx
import React from 'react';
import './ModelSlides.css';

const ClassModelsSlide = () => (
    <div id="class-model-slide" className="slide-container">
        <div className="content-container">
            <img src="/assets/python.png" alt="Python Logo" />

            <div className="tech-integration">
                <img src="/assets/sqlalchemy.png" alt="SQLAlchemy Logo" />
                <img src="/assets/sqlite.png" alt="SQLite Logo" />
            </div>
            <h2>Class Models</h2>
            <p>
                Python classes are used to represent the database models. 
                These classes are defined using SQLAlchemy ORM library that bridges the gap between the application code and the database. 
                The ORM translates these Python classes into tables in the SQLite database.
            </p>



        </div>


    </div>
);

export default ClassModelsSlide;
