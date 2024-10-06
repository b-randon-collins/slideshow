// src/components/slides/SQLiteSlide.jsx
import React from 'react';
import './ModelSlides.css';

const SQLiteSlide = () => (
    <div id="sqlite-slide" className="slide-container">
        <h2>SQLite Integration</h2>
        <p>
            SQLite is a lightweight, serverless, self-contained database engine that is widely used for its simplicity and minimal setup. It stores data in a single file, making it an excellent choice for applications requiring easy data management without the complexity of a server-based database.
        </p>
        <div className="tech-cards-container">
            <div className="tech-card">
                <img src="/assets/sqlite.png" alt="SQLite Logo" />
                <h2>SQLite</h2>
                <h4>How it's used in this project:</h4>
                <ul>
                    <li>Handles data persistence for users, posts, comments, and friendships.</li>
                    <li>Seamlessly integrates with SQLAlchemy for ORM functionality.</li>
                    <li>Efficient for development and testing environments.</li>
                    <li>Used with Flask and SQLAlchemy for easy database management.</li>
                </ul>
            </div>
        </div>
    </div>
);

export default SQLiteSlide;
